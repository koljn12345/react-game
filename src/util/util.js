export const getData = ()=>{  
    const page= Math.ceil(Math.random()*100)
    return fetch(`https://picsum.photos/v2/list?page=${page}&limit=2`).
    then(res=>res.json()).
    then(data=> {return data.map(el=>{ el.download_url=[...el.download_url.split('/').slice(0,-2), 300,500].join('/');
      return{id: el.id, url : el.download_url}})}).
    then(res=> res.map(el=>{el['img']=new Image(); el['img'].src=el.url; return el}))
}

export const getInitData=(data) => {
    return [...data, ...data].map((el,i)=> ({
        ...el,
        code : el.id,
        id:i,
        isOpen:true,
        isSolution:false,
        
    })).sort(() => Math.random() - 0.5)
}