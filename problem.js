// var age = 17;

// var vaccineCount = 2;

// var isVaccinated = false;

// if (age > 20 && vaccineCount == 2) {
//     console.log("you can go");
// }

// if (age > 15 && age < 20 && vaccineCount < 2) {
//     console.log("your vaccine date is in 20");
// }

// if ((age > 15 && age < 20) && vaccineCount == 2) {
//     isVaccinated = true;
//     console.log('congratulation')
// }

// আপনাকে ৩ টা ডাটা দেয়া আছে।যেখানে একজন মানুষের  বয়স , ভ্যাকসিন গ্রহণের  সংখ্যা এবং সব গুলো ভ্যাকসিন গ্রহণের স্ট্যাটাস দেয়া আছে। ভ্যারিয়েবল গুলোর ডাটার প্যাটার্ন নিচে দেয়া হলো।

//  age = 23 ;

//  vaccineCount = 1 ;

//  isVaccinated = false


// আপনাকে নিচে কয়েকটি শর্ত দেয়া হলো। শর্ত গুলো আপনাকে চিন্তা ভাবনা করে সমাধান করতে হবে। আপনি  প্রয়োজন অনুসারে ভ্যারিয়েবল গুলোর  মান পরিবর্তন করতে পারেন ।


// যাদের বয়স ২০ এর উপরে এবং যারা ২ ডোজ ভ্যাকসিন গ্রহণ করেছে তারা বিদেশ গমন করতে  পারবে।
// যাদের বয়স ১৫-২০ এর মধ্যে এবং যারা একবারও ভ্যাকসিন গ্রহণ করেনি তাদের কাছে একটি মেসেজ যাবে ভ্যাকসিন দেয়ার জন্য।
// যাদের বয়স ১৫-২০ এর মধ্যে এবং ২ ডোজ ভ্যাকসিন গ্রহণ করেছে  তাদের isVaccinated আপডেট হয়ে true হয়ে যাবে এবং তাদের কাছে একটি মেসেজ যাবে -“ আপনার ২ ডোজ  ভ্যাকসিন সম্পন্ন হয়েছে। ” ।
let age = 16;
let vaccineCount = 2;
let isVaccinated = false;


if (age > 20 && vaccineCount == 2) {
    console.log(" Congratulation ! apni bidesh gomon korte pareben ")
}
if (age > 15 && age < 20 && vaccineCount == 0) {
    console.log(" Please give your 1st dose now.")
}
if (age > 15 && age < 20 && vaccineCount == 2) {
    isVaccinated = true;
    // console.log(" You are done")
}

//
// তোমার কাছে বর্তমানে একটা নির্দিষ্ট বাজেট রয়েছে ফ্যামিলি ট্যুর দেয়ার জন্য। যেটা budget নামক একটা ভেরিএবলে থাকবে।  নিচের প্রবলেম গুলো পড়  এবং তোমার সিদ্ধান্ত নাও  ।


// যদি তোমার বাজেট  ৫০০০ এর বেশি হয় তাহলে তুমি ফ্যামিলি কে নিয়ে ট্যুর দিবে । অন্যথায় ৫০০০ এর কম হয় তাহলে ট্যুর না দিয়ে ঘুম দিবে।  যদি তুমি ট্যুর দিতে পারো তার মানে তোমার কাছে ৫০০০ এর বেশি টাকা আছে।  এখন ধরো হোটেল ভাড়া ৪০০০। তাহলে তুমি হিসেবে করো তাহলে হাতে আর কত টাকা এক্সট্রা আছে।  যদি ২০০০এর বেশি টাকা হাতে থাকে তাহলে তুমি বারবিকিউ পার্টি করবে , না হলে ট্যুরে গিয়ে অল্প শপিং করবে।



// let budget = 8000;
// hotelCost = 4000;
// if (budget > 5000) {
//     console.log(
//         " Let's Tour Cox's Bazar"
//     )

// } else if (budget => 7000) {
//     console.log(
//         "guraguri bad coding kor boshe"
//     )
// } else {
//     console.log(
//         " tk nai gumai jao"
//     )
// }
// let extraMoney = budget - hotelCost;
// console.log(extraMoney);

// if (extraMoney > 2000) {
//     console.log("Let's do a BBQ Party");
// } else {
//     console.log(" Shoping korte jabo")
// }


//while loop


const cars = ["shakib ", "Shishir", " Tamima ", "Nasir", "Rubel ", "Happy"];

let i = 0;
let text = "";
while (cars[i]) {
    text += cars[i] + "<br>";
    i++;
}