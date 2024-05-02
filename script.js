let navitems = document.querySelectorAll(".navitems");
let allimgs = document.querySelectorAll(".allimgs");
let clickedelementid;
navitems.forEach((navitem)=>{
    navitem.addEventListener("click",(e)=>
    {
        navitems.forEach((ni)=>
        {
            ni.classList.remove("active");
        })
        navitem.classList.add("active");
        clickedelementid = e.target.dataset.id;
        console.log(clickedelementid);
        allimgs.forEach((img)=>
        {
            img.style.display="none";
        })
        let cars = document.querySelectorAll("."+clickedelementid);
       let brand= Array.from(cars);
        console.log(cars);
        brand.forEach((b)=>
        {
            b.style.display="block";
        })  
        if(clickedelementid=="all")
        {
            allimgs.forEach((img)=>
        {
            img.style.display="block";
        })
        }   
    })
});