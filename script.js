let sidebar = document.querySelector('.sidebar');
let sidebarUl = document.querySelector('.sidebar ul')
let lis = [...sidebarUl.children];
let rect = sidebarUl.getBoundingClientRect();
lis.forEach((li,index) => {
    let dimentions =li.getBoundingClientRect();
    li.addEventListener('click',()=>{
        console.log('element dimentions',dimentions);
        let gaps = 16; // it is the amount of gap between li's witch is 16px 1rem;
        let calculateExactDimention = (dimentions.height * index) + (gaps * index);
        setSidebarTopVal(calculateExactDimention);
    })
});

// function to set the top property of the sidebar
const setSidebarTopVal = (val)=>{
    topVal = val ;
sidebar.style.top = `${-topVal}px`;
sidebar.style.background = `red`;
console.log('sidebar dimensions',sidebar.getBoundingClientRect())
}
