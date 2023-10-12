window.onload = () => {
    onLoadPage();
}

const closeCoupon = () => {
    const couponElement = document.getElementsByClassName('coupon')[0];
    couponElement.style.visibility = 'hidden';
}

const onLoadPage = () =>{
    const couponBody = getDocumentsByClassName('coupon')[0];
    couponBody.style.visibility = 'visible'
}

const mode = () => {
    let newbody = document.body;
    newbody.classList.toggle('dark');
}