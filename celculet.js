const allBtn = document.getElementsByClassName("add-btn");
//const allBtn = document.getElementsByClassName("budget");

for (const btn of allBtn) {
    btn.addEventListener("click", function (event) {
        const name = event.target.innerText;

        const className = event.target.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.childNodes[1].childNodes[3].childNodes[3].innerText;
        const price = event.target.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.childNodes[3].childNodes[1].childNodes[5].childNodes[3].childNodes[0].innerText;
        //console.log(name,price)
        const site = event.target. parentNode.parentNode.parentNode.parentNode.parentNode.childNodes[5].childNodes[3].childNodes[1].childNodes[1].childNodes[1].childNodes[1].childNodes[1].innerText;
        const TotelSite = event.target.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.childNodes[3].childNodes[1].childNodes[1].childNodes[1].childNodes[3].childNodes[1].childNodes[5].childNodes[1].innerText;
        console.log(className)

        const seletedContainer = document.getElementById("name-price-catagory-continner")


        event.target.setAttribute("disabled",false)
        
        const siteCount = getConvertedValue("cart");
        if (siteCount + 1 > 4) {
            alert("Youe limite is fisish.. You are not site select.");
            return;
        }
        event.target.style.backgroundColor = "rgb(50, 223, 50)"

        const countSite = getConvertedValue("cart");
        document.getElementById("cart").innerText = countSite + 1;
        

        const totleSite = getConvertedValue("left");
        document.getElementById("left").innerText = totleSite - 1;




        const div = document.createElement("div");
        div.classList.add("name-price-section");

        const p1 = document.createElement("p")
        const p2 = document.createElement("p")
        const p3 = document.createElement("p")

        p1.innerText = name;
        p2.innerText = className;
        p3.innerText = price;
        
        div.appendChild(p1)
        div.appendChild(p2)
        div.appendChild(p3)

        seletedContainer.appendChild(div)

        
        updeteTotleContent(price);

        updeteCoupne20();
        updeteNew15();
    })
}

function updeteCoupne20(status) {
    const totalCost = getConvertedValue("total-cost");
        if (status == undefined) {
        document.getElementById("total-discount").innerText = totalCost;

    } else {
        const HaveAnyCopupon = document.getElementById("but-section").value;

        if (HaveAnyCopupon == "Couple 20") {
            const discounted = totalCost * 0.2;
            document.getElementById("total-discount").innerText = totalCost - discounted;
            
        } else {
            alert("please enter your copun code")
        }
    }
}








function updeteNew15(status) {
    const totalCost = getConvertedValue("total-cost");
        if (status == undefined) {
        document.getElementById("total-discount").innerText = totalCost;

    } else {
        const HaveAnyCopupon = document.getElementById("but-section").value;

        if (HaveAnyCopupon == "New15") {
            const discounted = totalCost * 0.15;
            document.getElementById("total-discount").innerText = totalCost - discounted;
            
        } else {
            alert("please enter your copun code")
        }
    }
}




function updeteTotleContent(price) {
    const totalCost = getConvertedValue("total-cost");
    const convertedPrice = parseInt(price);
    const sum = totalCost + convertedPrice;
    document.getElementById("total-cost").innerText = sum;  
}



function getConvertedValue(id) {
    const price = document.getElementById(id).innerText;
    const convertPrice = parseInt(price);
    return convertPrice;
}










