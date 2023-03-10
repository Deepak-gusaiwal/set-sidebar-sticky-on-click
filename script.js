let sidebar = document.querySelector('.sidebar');
let sidebarUl = document.querySelector('.sidebar ul')
let lis = [...sidebarUl.children];
let rect = sidebarUl.getBoundingClientRect();
lis.forEach(li => {
    let dimentions =li.getBoundingClientRect();
    li.addEventListener('click',()=>{
        setSidebarTopVal(dimentions.top);
    })
});

// function to set the top property of the sidebar
const setSidebarTopVal = (val)=>{
    topVal = val ;
sidebar.style.top = `${-topVal}px`;
sidebar.style.background = `red`;
}
