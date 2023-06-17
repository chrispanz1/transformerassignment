
  
  //top container has the toggle function//
  const transfomerInfo=()=>{
    let newBio=document.querySelector('.bio')
newBio.innerHTML=" All items on sale on friday!";
}
  //we use another function to add an image!
  const addImage=()=>{
    let imageContainer=document.querySelector('.imageDiv')
    let imgTag=document.createElement('img')
    imgTag.src="https://static9.depositphotos.com/1694341/1168/i/450/depositphotos_11686181-stock-photo-lacoste-logo.jpg"
    imageContainer.append(imgTag)
}
  
  //the mens major container was provided by Jordan//

    let majorContainer ={
        mens: {
            headImage: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
            optionTags: ["Boots", "Flannels", "Rugged Wear", "Shaving Cream"],
            productImages: [
                {
                    name: 'Sneakers',
                    pic: "https://images.unsplash.com/photo-1527010154944-f2241763d806?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80"
                },
                {
                    name: 'Boots',
                    pic: "https://images.unsplash.com/photo-1638247025967-b4e38f787b76?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80"
                },
                {
                    name: 'Flannels',
                    pic: "https://images.unsplash.com/photo-1638718297700-e828368a54e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
                },
                {
                    name: 'Scarves',
                    pic: "https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
                },
                {
                    name: 'Hoodies',
                    pic: "https://images.unsplash.com/photo-1509942774463-acf339cf87d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
                },
                {
                    name: 'Hats',
                    pic: "https://images.unsplash.com/photo-1521119989659-a83eee488004?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=723&q=80"
                },
            ],
            textDescription: 'Update your everyday wardrobe with our collection of men’s pants. Discover tailored suit pants for work or special occasions, as well as comfier sweatpants and joggers for downtime. Mix up your weekend look and swap the jeans for a pair of cargo pants or chinos. Browse a range of colors, from neutral blacks and grays to brighter shades and prints. Find everything from soft breathable cotton to functional track pants and luxe velvet dress pants.',
            lowImage: 'https://images.unsplash.com/photo-1516826957135-700dedea698c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80'
        },
        womens: {
            headImage: "",
            optionTags: ["Shoes", "Shirts", "Outer Wear", "Accessories"],
            productImages: [
                {
                    name: 'dresses',
                    pic: "https://media.istockphoto.com/id/1407656268/photo/blonde-young-woman-in-elegant-white-dress.jpg?s=1024x1024&w=is&k=20&c=p6wDwNRAF9DCXUG_HKrXpZmRKQxwareOPZlY_aPCs8U="
                },
                {
                    name: 'Pants',
                    pic: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGFudHN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"
                },
                {
                    name: 'Shirts',
                    pic: "https://images.unsplash.com/photo-1626497764746-6dc36546b388?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c2hpcnRzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
                },
                {
                    name: 'shoes',
                    pic: "https://media.istockphoto.com/id/619412092/photo/new-pair-of-stylish-brown-high-heels-with-cork-soles.webp?b=1&s=170667a&w=0&k=20&c=a35KzEGq3wEiY6IT7t66R-BC88wBoc5br6EitzehL4g="
                },
                {
                    name: 'Jewelry',
                    pic: "https://media.istockphoto.com/id/482779158/photo/boho-girls-hands-looking-feminine-with-many-rings.jpg?s=1024x1024&w=is&k=20&c=akep0klpBBQ1wceTXbqIsMl3RcoeZmvN9q6OeO_d1oU="
                },
                {
                    name: 'hats',
                    pic: "https://media.istockphoto.com/id/860232780/photo/woman-at-the-marina.webp?b=1&s=170667a&w=0&k=20&c=QsxEB2WOGgsWrF8Ovv-T4V65VGc1rJ3JiJzvbNkU5ow="
                },
            ],
            textDescription: 'Update your everyday wardrobe with our collection of women’s pants. Discover tailored suit pants for work or special occasions, as well as comfier sweatpants and joggers for downtime. Mix up your weekend look and swap the jeans for a pair of cargo pants or chinos. Browse a range of colors, from neutral blacks and grays to brighter shades and prints. Find everything from soft breathable cotton to functional track pants and luxe velvet dress pants.',
            lowImage: 'https://images.unsplash.com/photo-1516826957135-700dedea698c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80'
       
        },
             
           //above we have all the image elements for the womens functions!//
       
        kids: {
       
            headImage: "https://images.unsplash.com/photo-1504438190342-5951e134ffee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y2hpbGRyZW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
            optionTags: ["Shoes", "Shirts", "Outer Wear", "Hats"],
            productImages: [
                {
                    name: 'Shoes',
                    pic: "https://media.istockphoto.com/id/1180837581/photo/pastel-blue-sneakers-on-crossed-legs-casual-footwear.webp?b=1&s=170667a&w=0&k=20&c=JcdLoS-f6P-9SOewEoS6WM7dwSWsv2JKMayR1fvkVxY="
                },
                {
                    name: 'Pants',
                    pic: "https://plus.unsplash.com/premium_photo-1668046104942-c591e738999b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGFudHN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"
                },
                {
                    name: 'Shirts',
                    pic: "https://images.unsplash.com/photo-1629426958003-35a5583b2977?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHNoaXJ0c3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
                },
                {
                    name: 'Jackets',
                    pic: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8amFja2V0c3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
                },
                {
                    name: 'Hats',
                    pic: "https://images.unsplash.com/photo-1643042945810-1119948eeabc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
                },
                {
                    name: 'Accessories',
                    pic: "https://images.unsplash.com/photo-1643042945810-1119948eeabc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
                },
            ],
            textDescription: 'Update your clothing style with our great kids selection here.',
            lowImage: 'https://images.unsplash.com/photo-1516826957135-700dedea698c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80'
       
    }
}



const mensButtons = document.querySelector('.mens')
console.log(mensButtons)
const womensButton = document.querySelector('.womens')
console.log(womensButton)
const kidsButton = document.querySelector('.kids')
console.log(kidsButton)

const mainImage = document.querySelector('.topPic')
console.log(mainImage)


//option tabs
const options = document.querySelectorAll('.choice')
console.log( options )

//product container
const productContainer = document.querySelector('.productContainer')
console.log( productContainer)


let pic = document.querySelector('.polaroid')


let textBox= document.querySelector('.textContainer')




const changeMainImage = (type) =>{
    if( type === 'mens'){
        mainImage.src = majorContainer.mens.headImage
    }else if(type === 'womens'){
        mainImage.src = majorContainer.womens.headImage
     } else if(type === 'kids'){
            mainImage.src = majorContainer.kids.headImage
        }
    }


   
    const changeOptions = (type) =>{
        //mens, womens, kids
        if(type === 'mens'){
            type = majorContainer.mens.optionTags
        } else if(type === 'womens'){
            type = majorContainer.womens.optionTags
        } else if(type === 'kids')
            type = majorContainer.kids.optionTags
        console.log(type)

        
        for(let i = 0; i < type.length; i++){
            console.log('for loop', options[i].innerText )
            console.log(`Category ${type[i]}`)
            options[i].innerText = type[i]
        }
   
    }


    

const changeProduct = (type) =>{
    if(type === 'mens'){
        type = majorContainer.mens.productImages
    } else if (type === 'womens'){
        type = majorContainer.womens.productImages
    } else if (type === 'kids'){
        type = majorContainer.kids.productImages
    }
   
    console.log(type)

    //empty productContainer
    productContainer.innerHTML = "";

   
  

    for ( let i = 0; i < type.length; i++){
        let imgTag = document.createElement(`img`)
        imgTag.setAttribute("src",type[i].pic);
        imgTag.setAttribute("class", "product")
        console.log(imgTag)
       
        productContainer.append(imgTag)
    }

    }


   



const changeAll = (type) => {
    changeMainImage(type)
    changeOptions(type)
    changeProduct(type)

}