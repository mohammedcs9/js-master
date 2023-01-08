/*
    output to screen
    - window.alert()
    - document.write()
    - console.log()
 *//*
    document.write("Hello From JS File");
    document.write("<h1>hello <span>Page</span></h1>");
    document.write("Hello From JS File");
    console.log("hi mohmd");
    window.alert("welcome");
    *//*
        Console Methods
        - log
        - error
        - table
    
        Consle From Web API
    
        Styling Console
        - Directive %c
    */
    
    //console.log("Log");
    //console.error("error");
    //console.table(["mohmmad", "ali" , "abd"]);
    //console.log("Hello From %cJS %cFile", "color: red; font-size: 40px" , "color: blue; font-size: 40px");
    //console.log("hi");
    //console.error("error");
    //console.table(["mohmd","abd","noor"]);
    //console.log("hi mohmd %cjs %cfile", "color: red; font-size: 40px" , "color: blue; font-size: 50px");
    
    /*
        ES6 ecma script 6
    */
    
    //var myName = "Mohammad";
    //console.log("Hello " + myName);
    //console.log(`Hello ${myName}`);
    //var n = "hi";
    //console.log("mohmd " + n);
    //console.log(`mohmd ${n}`);
    /*
        Data Types Intro
        - String
        - Number
        - Array=> Object
        - Object
        - boolean
    */
    
    //console.log('Mohammad Nabeel');
    //console.log(typeof "Mohammad Nabeel"); console.log(typeof("Mohammad Nabeel"));
    //console.log(typeof 5000);
    //console.log(typeof [10, 15, 17]);
    //console.log(typeof ["Mohammad", "Nabeel"]);
    //console.log(typeof {name: 'Mohammad', age: 25, country: 'Jo'});
    //console.log(typeof true);
    //console.log(typeof false);
    //console.log(typeof undefined);
    //console.log(typeof null);
    //document.write(typeof "mohmd");
    //console.log(typeof "mohmd");
    //document.write(typeof 50);
    //console.log(typeof 50);
    //document.write(typeof [10,20,30]);
    //console.log(typeof [10,20,30]);
    //document.write(typeof ["hi","how"]);
    //console.log(typeof ["hi", "how"]);
    //document.write(typeof {name: "mohmd", age: 36, country: 'Jo'});
    //console.log(typeof {name: "mohmd", age: 36, country: 'Jo'});
    //document.write(typeof true);
    //document.write(typeof undefined);
    //document.write(typeof null);
    /*
        Variables Intro
        - Syntax( Keyword | Variable Name | Assignment Operator | Variable Value )
    */
    
    //var user = "Mohammad",
    //  age = 36;
    //var user = "Mohammad";
    //var age = 36;
    //var u = "m",
    //a = 55;
    //console.log(u,a);
    
    //console.log(user);
    //console.log(age);
    //console.log(h); // in html => Div
    
    //h.innerHTML = "Abd";
    
    /*
        Identifiers  
        - Name Conventions And Rules
        - Reserved Words
    */
    
    /*
        Var
        - Redeclare (Yes)
        - Access Before Declare (Undefined)
        - Variable Scope Drama [Added To Window] ()
        Let
        - Redeclare (No => Error)
        - Access Before Declare (Error)
        - Variable Scope Drama ()
        -
        Const
        - Redeclare (No No => Error)
        - Access Before Declare (Error)
        - Variable Scope Drama ()
        -
    */
    
    //var a = 1;
    //var a = 2;
    //console.log(a);
    //var a = 2;
    //var a = 5;
    //console.log(a);
    //let b = 2;
    //console.log(b);
    
    //const c = 2;
    //console.log(c);
    
    //var aabb = 1;
    //let ccdd = 2;
    //const eeff = 3;
    //
    //console.log(aabb,ccdd,eeff)
    
    /*
        String Syntax + Character Escape Sequences
        \ Escape + Line Continue
        \n
    */
    
    //console.log('Elzero Web "School"');
    //console.log("Elzero Web 'School'");
    //console.log("Elzero \\ Web \"School\"");
    //console.log("Elzero \
    //Web \
    //School");
    //console.log("Elzero\nWeb\nSchool");
    
    /*
        Concatention
    */
    
    //let a = "We Love";
    //let b = "JavaScript";
    
    //document.write(a + " " + b);
    //console.log(a, b);
    //let a = 51;
    //let b = "aaa";
    //document.write(a + " " + b);
    //console.log(a,b);
    
    /*
        Template Literals (Template Strings)
    */
    
    //let a = "We Love";
    //let b = "JavaScript";
    //let c = "And";
    //let d = "Programming";
    //let a = "A";
    //let b = "B";
    //let c = "C";
    //let d = "D";
    //console.log(a + " " + b +
    //"\n" + c + " " + d);
    
    //console.log(`${a} "" '' \\ ${b} ${c} ${d} ${50/5} ${"hi"}`);
    //console.log(a + " " + b + 
    //"\n" + c + " " + d);
    
    //console.log(`${a} "" '' \\ ${b}
    //${c} ${d} ${500*10}`);
    
    
    //let title = "Mohammad";
    //let desc = "Hi";
    //let markUp = `
    //    <div class="card">
    //        <div class="child">
    //        <h2>${title}</h2>
    //       <P>${desc}</p>
    //        </div>
    //    </div>
    //`;
    
    //document.write(markUp);
    
    //let t = "M";
    //let d = "H";
    //let M = `<div class="card">
    //            <div class="child">
    //                <h2>${t} d</h2>
    //                <p>${d} t</p>
    //            </div>
    //        </div>`;
    //document.write(M);  
    
    /*
       //واجب
    
    
    let Web = Title="Mohammad", description="Mohammad ALzoubi", date="29/10";
    
    let Web2 = `
        <div>
            <h3>Hello ${Title}</h3>
            <p>${description}</p>
            <span>${date}</span>
        </div>
        <div>
            <h3>Hello ${Title}</h3>
            <p>${description}</p>
            <span>${date}</span>
        </div>
        <div>
            <h3>Hello ${Title}</h3>
            <p>${description}</p>
            <span>${date}</span>
        </div>
        <div>
            <h3>Hello ${Title}</h3>
            <p>${description}</p>
            <span>${date}</span>
        </div>
    `;
    
    document.write(Web2);
    
    let W = T="M", D="M", d=09/10;
    let w = `
            <div>
                    <h3>${W}</h3>
                    <p>${D}</p>
                    <span>${d}</span>
            </div>
            <div>
                    <h3>${W}</h3>
                    <p>${D}</p>
                    <span>${d}</span>
            </div>
            <div>
                    <h3>${W}</h3>
                    <p>${D}</p>
                    <span>${d}</span>
            </div>
            <div>
                    <h3>${W}</h3>
                    <p>${D}</p>
                    <span>${d}</span>
            </div>
            `;
    document.write(w);        
    */
    /*
        Arithmetic Operators
        + Addition
        - Subtraction
        * Multiplication
        / Division
        ** Exponentiation (ES7)
        % Modulus (Division Remainder)
        ++ Increment [ Post / pre ]
        -- Decrement [ Post / pre ]
    */
    //console.log(10 + " M", 10 -20, 10 - " M", typeof NaN, 10*20,20/4,2**3,10%3);
    //console.log(10 + "Mohammad");
    //console.log(10 - 20);
    //console.log(10 - "Mohammad");
    //console.log(typeof NaN);
    //console.log(10 * 20);
    //console.log(20 / 5);
    //console.log(2 ** 3);
    //console.log(10 % 2);
    
    
    /*
        - + Unary Plus 
        - - Unary Negation
        Tests
        - Normal Number
        - String Number
        - String Negative Number
        - String Text
        - Float
        - Hexadecimal Numeral System => 0xFF
        - null
        - false
        -true
        */
    
    /*
    console.log(+"100",+100,+"-100",+"M",+"5.66",+0XFF,+null,+false,+true);
    console.log(-"100",-100,"-100",-"M",-"5.66",-0XFF,-null,-false,-true);
    console.log(+"100");
    console.log(+100);
    console.log(+"-100");
    console.log(+"Mohammad");
    console.log(+"5.55");
    console.log(+0XFF);
    console.log(+null);
    console.log(+false);
    console.log(+true);
    
    console.log(-100);
    console.log(-"100");
    console.log(-"-100");
    console.log(-"Mohammad");
    console.log(-"5.55");
    console.log(-0XFF);
    console.log(-null);
    console.log(-false);
    console.log(-true);
    
    console.log(Number("100"));
    */
    
    /*
        Type Coercion (Type Casting)
        - +
        - - 
        - "" - 2
        - fasle - true
    */
    
    //let a = "10";
    //let b = 20;
    //let c = true;
    
    //console.log(+a + b);
    //console.log(Number(a) + b);
    //console.log(a - b);
    //console.log("" - 2);
    //console.log(false - true);
    //console.log(b + c);
    //console.log(a + b + c);
    //console.log(+a + b + c);
    //let a = "10";
    //let b = 20;
    //let c = true;
    //console.log(+a + b,a + b,Number(a) + b,a - b,"" - 2,false - true,b + c,a + b + c,);
    /*
        Assignment Operators
    */
    
    //let a = 10;
    //a = a + 20;
    //a = a + 70;
    //a += 100;
    
    //a -= 50;
    //a /= 50;
    //a *= 2;
    //console.log(a);
    
    /*
        Challenge 1
    */
    
    //let a = 10; //a = 12
    //let b = "20";// b = 22
    //let c = 80;// c = 81
    
    //console.log(++a + +b++ + +c++ - +a++);// 11 + 20 + 80 - 11 = 100
    //console.log(++a + -b + +c++ - -a++ + +a); // 13 - 21 + 81 + 13 + 14 = 100
    //console.log(--c + +b + --a * +b++ - +b * a + --a - +true);// 81 + 21 + 13 * 21 - 22 * 13 + 12 - 1 = 100
    
    //let d = "-100";
    //let e = "20";
    //let f = 30;
    //let g = true;
    
    //console.log(-d * +e); // 100 * 20 = 2000
    //console.log(++e * ++g + -d + ++f); // 21 * 2 + 100 + 31 = 173
    
    //let a = 10;//a=12/
    //let b = "20";//b=22
    //let c = 80;//c=81
    //console.log(++a + +b++ + +c++ - +a++);//11 + 20 + 80 - 11 = 100
    //console.log(++a + -b + +c++ - -a++ + +a);//13 + - 21 + 81 - -13 + 14 = 100
    //console.log(--c + +b + --a * +b++ - +b * a + --a - +true);//81 + 21 + 13 * 21 - 22 * 13 + 12 - 1 = 100
    
    /*
        Number 
        - Double Precision
        - Syntactic Sugar "_"
        - e 
        - **
        - With Decimal
        - Number + BigInt
        - Number Min Value
        - Number Max Value
    */
    
    //console.log(1000000);
    //console.log(1_000_000);
    //console.log(1e6);
    //console.log(10 ** 6);
    //console.log(1000000.00);
    //console.log(Number.MAX_SAFE_INTEGER);
    //console.log(Number.MAX_VALUE);
    
    //console.log(1000000,1_000_000,1e6,10 ** 6,1000000.00,Number.MAX_SAFE_INTEGER,Number.MIN_SAFE_INTEGER,Number.MAX_VALUE);
    
    /*
        Number Methods
        - Two Dots To Call A Methods
        - toString()
        - toFixed()
        - parseInt()
        - parseFloat()
        - isInteger() [ES6]
        - isNaN() [ES6]
    
    
    console.log((100).toString());//return string
    console.log(100.50.toString());//return string
    
    console.log(100.55355.toFixed(2));//return string
    console.log(100.55655.toFixed(2));//return string
    
    console.log(Number("100 Mohammad"));//return NaN
    console.log(+"100 Mohammad");//return NaN
    console.log(parseInt("100 Mohammad"));//return Number
    
    console.log(Number("100"));//return Number
    console.log(+"100");//return Number
    console.log(parseInt("100"));//return Number
    
    console.log(parseFloat("100.500"));
    
    console.log(Number.isInteger("100"));
    console.log(Number.isInteger(100.500));
    console.log(Number.isInteger(100));
    
    console.log(Number.isNaN(100));
    console.log(Number.isNaN("Mohammad"));
    console.log(Number.isNaN("Mohammad" / 20));
    */
    
    /*
        Math Object
        - round()
        - ceil()
        - floor()
        - min()
        - max()
        - pow()
        - random()
        - trunc() [ES6]
    */
    
    /*
    console.log(Math.round(99.6));
    console.log(Math.round(99.4));
    console.log(Math.ceil(99.3));
    console.log(Math.ceil(99.6));
    console.log(Math.floor(99.4));
    console.log(Math.floor(99.6));
    console.log(Math.min(10, 20, 100, -100, 90));
    console.log(Math.max(10, 20, 100, -100, 90));
    console.log(Math.pow(2, 4));
    console.log(Math.random());
    console.log(Math.trunc(99.5));
    */
    
    /*
        Number Challenge
    */
    /*
    
    let a = 1_00;
    let b = 2_00.5;
    let c = 1e2;
    let d = 2.4;
    
    
    console.log(Math.min(a,b,c,d));
    console.log(a ** parseInt(d));
    console.log(Math.round(2.4));
    console.log(Math.ceil(2.4));
    console.log(Math.floor(2.4));
    console.log(Math.trunc(2.4));
    console.log(parseInt(b) / Math.ceil(d).toFixed(2));
    console.log(Math.round(parseInt(b) / Math.ceil(d)));
    */
    
    /*
        String Methods
        - Access With Index
        - Access With charAt()
        - length
        - trim()
        - toUpperCase()
        - toLowerCase()
        - Chain Methods
    */
    
    //let theName = "  Ahmed  ";
    
    //console.log(theName);
    //console.log(theName[1]);
    //console.log(theName.charAt(2));
    //console.log(theName.length);
    //console.log(theName.trim());// remove the space
    //console.log(theName.toUpperCase());
    //console.log(theName.toLowerCase());
    //console.log(theName.trim().charAt(2).toUpperCase());//Chain Methods
    
    
    /*
        String Methods
        - indexOf(Value [Mand], Start [Opt] 0)
        - lastIndexOf(Value [Mand], Start [Opt] Length)
        - slice(Start [Mand],End  [Opt] Not Include End)
        - repeat(Times) [ES6]
        - split(Separator [Opt], Limit [Opt])
    */
    /*
    let a = "Mohammad Web School";
    
    console.log(a.indexOf("Web"));
    console.log(a.indexOf("o"));
    console.log(a.indexOf("Web", 10));
    console.log(a.lastIndexOf("Web"));
    console.log(a.lastIndexOf("o"));
    console.log(a.slice(2, 9));
    console.log(a.slice(0));
    console.log(a.slice(-5, -3));
    console.log(a.repeat(5));
    console.log(a.split(" "));
    console.log(a.split("", 5));
    console.log(a.split(""));
    */
    
    /*
        String Methods
        - Substring(Start [Mand], End [Opt] Not Including End)
        --- Start > End Will Swap
        --- Start < 0 It Start From 0
        --- Use Length To Get Last Character
        - Substr(Start [Mand], Characters To Extract)
        --- Start >= Length = ""
        --- Negative Start From End
        - includes(Value [Mand], Start [Opt] Default 0) [ES6]
        - startsWith(Value [Mand], Start [Opt] Default 0) [ES6]
        - endsWith(Value [Mand], Length [Opt] Default Full Length) [ES6]
    */
    /*
    let a = "Mohammad Web School";
    
    console.log(a.length);
    console.log(a.substring(2));
    console.log(a.substring(2,8));
    console.log(a.substring(8, 2));
    console.log(a.substring(-10, 8));
    console.log(a.substring(a.length - 1));
    console.log(a.substring(a.length - 5, a.length - 3));
    
    console.log(a.substr(0, 6));
    console.log(a.substr(19));
    console.log(a.substr(18));
    console.log(a.substr(-3));
    console.log(a.substr(-5, 2));
    
    console.log(a.includes("Web"));
    console.log(a.includes("Web", 12));
    console.log(a.startsWith("M"));
    console.log(a.startsWith("M", 2));
    console.log(a.startsWith("a", 3));
    console.log(a.startsWith("hammad", 2));
    
    console.log(a.endsWith("o"));
    console.log(a.endsWith("l"));
    console.log(a.endsWith("d", 8));
    console.log(a.endsWith("ad", 8));
    */
    
    /*
        String Challenge
    */
    /*
    let a = "Elzero Web School";
    
    console.log(a.charAt(2).toUpperCase() + a.slice(3,6));
    console.log(a.slice(13,14).repeat(8).toUpperCase());
    console.log(a.split(" ", 1));
    console.log(a.substr(0, 6),a.substr(11, 16));
    console.log(a.charAt(0).toLowerCase() + a.slice(1, length -1).toUpperCase() + a.slice(-1).toLowerCase());
    */
    
    /*
        Comparision Operators
        - == Equal
        - != Not Equal
        - === Identical
        - !== Not Identical
        - > Larger Than
        - >= Larger Than Or Equal
        - < Smaller Than
        - <= Smaller Than Or Equal
    */
    /*
    console.log(10 == "10");// compare value
    console.log(-100 == "-100");//compare value
    console.log(10 != "10");//compare value
    console.log(10 === "10");// compare value + type
    console.log(10 !== "10");// compare value + type
    
    console.log(10 > 20);
    console.log(10 > 10);
    console.log(10 >= 10);
    
    console.log(10 < 20);
    console.log(10 < 10);
    console.log(10 <= 10);
    
    console.log("abd" === "mohmd");
    console.log(typeof "abd" === typeof "mohmd");
    */
    
    /*
        Logical Operators
        - ! Not
        - && And
        - || Or
    */
    
    //console.log(true);
    //console.log(!true);
    
    //console.log(!(10 == "10"));
    //console.log(10 == "10" && 10 > 8 && 10 > 50);
    //console.log(10 == "10" || 10 > 8 || 10 > 50);
    
    /*
        Control Flow
        - if 
        - else if
        - else
    
        if (condtion) {//Block of code}
    */
    /*
    let price = 100;
    let discount = false;
    let discountAmount = 30;
    let country = "KSA";
    
    if (discount === true) {
        price -= discountAmount;// price = price - discountAmount
    }else if(country === "jordan") {
        price -= discountAmount;// price = price - discountAmount
    }else if (country === "syria") {
        price -= 50;
    }else {
        price -= 10;
    }
    
    console.log(price);
    */
    
    /*
        Nested If
    */
    /*
    let price = 100;
    let discount = false;
    let discountAmount = 30;
    let country = "KSA";
    let student = true;
    
    if (discount === true) {
    
        price -= discountAmount;// price = price - discountAmount
    
    }else if(country === "KSA") {
    
        if (student ===true) {
    
            price -= discountAmount + 30;
    
        }else {
    
            price -= discountAmount + 10;
    
        }
    
    }else {
    
        price -= 10;
    
    }
    
    console.log(price);
    */
    
    /*
    let price = 100;
    let discount = false;
    let discountAmount = 30;
    let country = "KSA";
    let student = true;
    
    if (discount === true) {
    
        price -= discountAmount;// price = price - discountAmount
    
    }else if(country === "KSA" && student === true) {
    
        price -= discountAmount + 30;// price = price - discountAmount
    
    }else if(country === "KSA" && student === false) {
    
        price -= discountAmount + 10;// price = price - discountAmount
    
    }else {
    
        price -= 10;
    
    }
    
    console.log(price);
    */
    /*
        Conditional (Ternary) Operator  // if مختصرة
    */
    /*
    let theName = "Mona";
    let theGender = "Female";
    let theName1 = "Ahmed";
    let theGender1 = "Male";
    let theAge = 30;
    
    if(theGender === "Female"){
        console.log("Mr");
    } else {
        console.log("Mrs");
    }
    
    if(theGender1 === "Male"){
        console.log("Mrs");
    } else {
        console.log("Mr");
    }
    
    // Condition ? If True : If False
    theGender1 === "Male" ? console.log("Mrs") : console.log("Mr");
    
    let result = theGender1 === "Male" ? "Mr" : "Mrs";
    document.write(result);
    
    console.log(theGender1 === "Male" ? "Mr" : "Mrs");
    
    console.log(`Hello ${theGender1 === "Male" ? "Mr" : "Mrs"} ${theName}`);
    
    theAge < 20 
    ? console.log(20) 
    : theAge > 20 && theAge < 60 
    ? console.log("20 To 60") 
    : theAge > 60 ? console.log("Larger Than 60") 
    : console.log(Unknown);
    */
    
    /*
        Logical Or ||
        -- Null + Undefined + Any Falsy Value
        Nullish Coalescing Operator ??
        -- Null + Undefined
     */
    /*
    let price = 100;
    console.log(`The Price Is ${price}`);
    let price1;
    console.log(`The Price Is ${price1}`);
    let price2 = null;
    console.log(`The Price Is ${price2}`);
    
    let price3 = 0;
    console.log(`The Price Is ${price3 || 200}`);
    console.log(`The Price Is ${price3 ?? 200}`);
    
    console.log(Boolean(100));
    console.log(Boolean(-100));
    console.log(Boolean(0));
    console.log(Boolean(null));
    console.log(Boolean(""));
    */
    
    /*
        If Challenge
     */
     /*   
    let a =10;
    
    a < 10 
    ? console.log(10) 
    : a >= 10 && a <= 40 
    ? console.log("10 To 40") 
    : a > 40 
    ? console.log("> 40") 
    : console.log(UnKnown);
    
    let st = "Elzero Web School";
    if ((st.length*2).toString() === "34") {
        console.log("Good");
    }
    
    if (st[st.indexOf("W")].toLowerCase() === "w") {
        console.log("Good");
    }
    
    if (st.length !== "string") {
        console.log("Good");
    }
    
    if (typeof (st.length) === "number") {
        console.log("Good");
    }
    
    if (st.slice(0.6) + st.slice(0.6) === "ElzeroElzero") {
        console.log("Good");
    }
    */
    
    /*
        Switch Statement
        switch(expression) {}
            Case 1:
            //Code Block
            break;
            Case 2:
            //Code Block
            break;
            Default :
            //Code Block
            break;
        }
        - Default Ordering
        - Multiple Match    
        - ===
    */
    
    /*
    let day = 5;
    switch (day){
        case 0:
            console.log("saturday");
            break;
        case 1:
            console.log("Sunday");
            break;
        case 2:
            console.log("Monday");
            break;
        default:
            console.log("UnKnown Day"); 
            break;       
    }
    */
    /*
        Switch Challenge
    */
    /*
    let job = "Manager";
    let salary = 7000;
    
    switch (job) {
        case "Manager":
            salary = 8000;
            console.log(`The salary is ${salary}`);
        break;
        case "IT":
        case "Support":
            salary = 6000;
            console.log(`The salary is ${salary}`);
            break;
        case "Developer":
        case "Designer":
            salary = 7000;
            console.log(`The salary is ${salary}`);
            break; 
        default:
            salary = 4000;
            console.log(`The salary is ${salary}`);   
    }
    
    let holidays = 3;
    let money = 0;
    
    holidays === 0 
    ? console.log(`My Money is ${money=5000}`) 
    : holidays === 1 || holidays === 2 
    ? console.log(`My Money is ${money=3000}`) 
    : holidays === 3 
    ? console.log(`My Money is ${money=2000}`) 
    : console.log(`U don't have any Money`);
    */
    
    /*
        Arrays
        - create arrays [two methods] new array() + []
        - access arrays elements
        - nested arrays
        - change arrays elements
        - check for array array.isarray(arr);
    */
    /*
    let myFriends = ["ahmed", "mohmd", "sayed" , ["marwan", "ali"]];
    console.log(`hello ${myFriends[0]}`);
    console.log(`hello ${myFriends[1]}`);
    console.log(`${myFriends[1][2]}`);
    console.log(`hello ${myFriends[3][1]}`);
    console.log(`hello ${myFriends[3][1][2]}`);
    
    console.log(myFriends);
    myFriends[1] = "abd";
    console.log(myFriends);
    myFriends[3] = ["jamal", "noor"];
    console.log(myFriends);
    myFriends[3] = "sameh";
    console.log(myFriends);
    
    console.log(Array.isArray(myFriends));
    */
    
    /*
        Arrays Methodes
        - length
    */
    /*
    let myFriends = ["ahmed","mohamed","sayed","alaa", "osama"]
    console.log(myFriends.length);
    
    myFriends[3] = "gamal";
    console.log(myFriends);
    
    myFriends[myFriends.length] = "ali";
    myFriends[myFriends.length - 2] = "ali";
    
    myFriends.length = 3;
    console.log(myFriends);
    */
    /*
        arrays methods [adding and removing]
        - unshift("","") Add element to the first
        - push("","") Add element to the end
        - shift() Remove first element from array
        - pop() Remove last element from array
    */
    /*
    let myFriends = ["ahmed","mohamed","sayed","alaa"];
    console.log(myFriends);
    
    myFriends.unshift("osama", "nabil");
    console.log(myFriends);
    
    myFriends.push("samah", "eman");
    console.log(myFriends);
    
    let first = myFriends.shift();
    console.log(myFriends);
    
    console.log(`First Name Is ${first}`);
    
    let last = myFriends.pop();
    console.log(myFriends);
    
    console.log(`Last Name Is ${last}`);
    */
    
    /*
        Arrays Methods [Search]
        - indexOf(search<== element, from Index [Opt])
        - lastIndexOf(search<== element, from Index [Opt])
        - includes(valueToFind, fromIndex [Opt]) [ES7]
    */
    
    let myFriends = ["ahmed","mohamed","sayed","alaa","ahmed"];/*
    console.log(myFriends);
    
    console.log(myFriends.indexOf("ahmed"));
    console.log(myFriends.indexOf("ahmed", 2));
    
    console.log(myFriends.lastIndexOf("ahmed"));
    console.log(myFriends.lastIndexOf("ahmed", -2));
    
    console.log(myFriends.includes("ahmed"));
    console.log(myFriends.includes("ahmed", 2));
    
    if(myFriends.indexOf("ahmed") === 0) {
        console.log("Not Found");
    }
    
    if(myFriends.lastIndexOf("ahmed") === 4) {
        console.log("Not Found 1");
    }
    
    if(myFriends.indexOf("osama") === -1) {
        console.log("Not Found 2");
    }
    
    if(myFriends.lastIndexOf("osama") === -1) {
        console.log("Not Found 3");
    }
    
    console.log(myFriends.indexOf("osama"));
    console.log(myFriends.lastIndexOf("osama"));
    
    */
    /*
        arrays methods [sort]
        - sort(function [Opt])
        - reverse
    */
    /*
    let myFriends = [10, "sayed", "mohamed", "90", 1000, 100, 20, "10", -20, -10];
    console.log(myFriends);
    
    //console.log(myFriends.sort());
    //console.log(myFriends.reverse());
    console.log(myFriends.sort().reverse());
    */
    
    /*
        Arrays Methods [Slicing]
        - slice(Sart [Opt], End [Opt] not including end)
        --- slice() => all array
        --- If start Is Undefined => 0
        --- Negative Count From End
        --- If End is Undefined || > Indexes => Slice To The End Array.length
        - splice(Start [Mand], DeleteCount [Opt] [0 No Remove], The Items To Add [Opt])
        --- if negative => start from the end
    */
    /*
    let myFriends = ["ahmed","sayed", "ali","osama","gamal","ameer"];
    console.log(myFriends);
    console.log(myFriends.slice(1));
    console.log(myFriends.slice(1,3));
    console.log(myFriends.slice(-3));
    console.log(myFriends.slice(1,-2));
    console.log(myFriends.slice(-6));
    console.log(myFriends.slice(-4,-2));
    
    
    //myFriends.splice(0,0,"sameer","samara");
    //myFriends.splice(0,1,"sameer","samara");
    //myFriends.splice(0,2,"sameer","samara");
    myFriends.splice(1,2,"sameer","samara");
    console.log(myFriends);
    */
    
    /*
        arrays methods [joining]
        - concat(array, array) => Return A new array
        - join(Separator)
    */
    /*
    let myFriends = ["ahmed", "sayed", "ali", "osama", "gamal", "ameer"];
    let myNewFriends = ["samar", "sameh"];
    let schoolFriends = ["haytham", "shady"];
    
    let allFriends = myFriends.concat(myNewFriends, schoolFriends, "gameel", [1,2]);
    console.log(allFriends);
    
    console.log(allFriends.join());
    console.log(allFriends.join(""));
    console.log(allFriends.join(" @ "));
    console.log(allFriends.join("|"));
    console.log(allFriends.join("|").toUpperCase());
    */
    
    /*
        arrays challenges
    */
    
    //let zero = 0;
    
    //let counter = 3;
    
    //let my = ["ahmed", "mazero", "elham", "osama", "gamal", "ameer"];
    
    //console.log(my.slice(zero,++counter).reverse());
    //console.log(my.slice(++zero,--counter).reverse());
    //console.log(my[my.indexOf("mazero")].replace("ma","El"));
    //console.log(my[my.indexOf("mazero")].slice(++counter).replace("o","O"));
    
    /*
        Loop
        - For
        for([1] [2] [3]) {
            //code
        }
    */
    
    //for(let i = 0; i < 10; i++) {
    //    console.log(i);
    //}
    
    /*
        Loop
        - Loop On Sequences
    */
    
    //let myFriends = ["osama", "ahmed", "sayed", "ali", "amira"];
    //console.log(myFriends[0]);
    //console.log(myFriends[1]);
    //console.log(myFriends[2]);
    //console.log(myFriends[3]);
    //console.log(myFriends[4]);
    
    //for(let i = 0; i < 5; i++) {
        //console.log(i);
        //console.log(myFriends[0]);
        //console.log(myFriends[i]);
    //}
    //for(let i = 0; i < myFriends.length; i++) {
        //console.log(myFriends[i]);
    //}
    /*
    let myFriends = [1,2,"osama", "ahmed", "sayed", "ali"];
    
    let onlyNames = [];
    
    for(let i  = 0; i < myFriends.length; i++) {
        if(typeof myFriends[i] === 'string') {
            onlyNames.push(myFriends[i]);
        }
    }
    
    console.log(onlyNames);
    
    //if(typeof myFriends[0] === 'string') {
      //  onlyNames.push(myFriends[0]);
    //}
    //if(typeof myFriends[1] === 'string') {
      //  onlyNames.push(myFriends[1]);
    //}
    //if(typeof myFriends[2] === 'string') {
      //  onlyNames.push(myFriends[2]);
    //}
    //if(typeof myFriends[3] === 'string') {
      //  onlyNames.push(myFriends[3]);
    //}
    //if(typeof myFriends[4] === 'string') {
      //  onlyNames.push(myFriends[4]);
    //}
    //if(typeof myFriends[5] === 'string') {
      //  onlyNames.push(myFriends[5]);
    //}
    
    //console.log(onlyNames);
    */
    
    /*
        Loop
        - Nested Loops
    */
    /*
    let products = ["keyboard", "mouse", "pen", "pad", "monitor"];
    
    let colors = ["red", "green", "black"];
    
    let models = [2020, 2021];
    
    for(let i = 0; i < products.length; i++) {
        console.log("#".repeat(15));
        console.log(`# ${products[i]}`);
        console.log("#".repeat(15));
        console.log("colors: ");
        for(let j = 0; j < colors.length; j++) {
            //console.log(colors[j]);
            console.log(`- ${colors[j]}`);
        }
        console.log("models: ");
        for(let k = 0; k < models.length; k++) {
            //console.log(colors[k]);
            console.log(`- ${models[k]}`);
        }
    }
    */
    
    /*
        Loop Control
        - Break
        - Continue
        - Label
    */
    
    //let products = ["keyboard", "mouse","pen", "pad", "monitor"];
    //let colors = ["red","green","black"];
    /*
    //label
    mainLoop: for(let i = 0; i < products.length; i++) { 
        console.log(products[i]);
    nestedLoop: for(let j = 0; j < colors.length; j++) { 
            console.log(`- ${colors[j]}`);
            if(colors[j] === "green") {
                break nestedLoop;
            }
        }
    }
    */
    /*
    mainLoop: for(let i = 0; i < products.length; i++) { 
        console.log(products[i]);
    nestedLoop: for(let j = 0; j < colors.length; j++) { 
            console.log(`- ${colors[j]}`);
            if(colors[j] === "green") {
                break mainLoop;
            }
        }
    }
    */
    //break
    //let products = ["keyboard", "mouse", 10, 20,"pen", "pad", 30, 40, "monitor"];
    //let colors = ["red","green","black"];
    
    //for(let i = 0; i < products.length; i++) {
      //  console.log(products[i]);
        //if(products[i] === "pen"){
         //   break;
       // }
       
    //}
    
    //for(let i = 0; i < products.length; i++) {
      //  console.log(products[i]);
        //if(typeof products[i] === "pen"){
          //  continue;
        //}
       
    //}
    
    //for(let i = 0; i < products.length; i++) { 
      //  if(typeof products[i] === "number"){
        //    continue;
        //}
        //console.log(products[i]);
    //}
    //for(let i = 0; i < 3; i++) {
      //  console.log(products[i]);
    //}
    
    /*
        Loop for Advanced Example
    */
    /*
    let products = ["keyboard", "mouse","pen", "pad", "monitor","iphone"];
    let i = 0;
    
    for(; ; ) {
        console.log(products[i]);
        i += 2;
        if(i === products.length) {
            break;
        }
    }
    */
    
    /*
        products practice
    */
    /*
    let products = ["keyboard", "mouse","pen", "pad", "monitor"];
    let colors = ["red","green","black"];
    let showCount = 5;
    
    document.write(`<h1>Show ${showCount} Products</h1>`);
    
    for(let i = 0; i < showCount; i++) {
        document.write(`<div>`);
        document.write(`<h3>[${i + 1}]${products[i]}</h3>`);
        for(let j = 0; j < colors.length; j++) {
            document.write(`<p>${colors[j]}</p>`);
        }
        document.write(`<p>${colors.join(" | ")}</p>`);
        document.write(`</div>`);
    }
    */
    
    /*
        Loop
        - while
    */
    
    //let practice = ["keyboard","mouse","pen","pad","monitor","iphone"];
    
    //let index = 0;
    /*
    while(index < 10) {
        console.log(index);
        index++;
        if (index === 3) {
            break;
        }
    }*//*
    while(true) {
        console.log(index);
        index++;
        if (index === 3) {
            break;
        }
    }
    *//*
    while(index < practice.length) {
        console.log(practice[index]);
        index++;
    }
    */
    /*
        Loop
        - Do / While
    */
    /*
    let products = ["keyboard","mouse","pen","pad","monitor","iphone"];
    
    let i = 0;
    
    do {
        console.log(i);//0
        i++;
    }while (false)
    
    console.log(i);//1
    */
    
    /*
        Loop Challenge
    */
    /*
    let myAdmins = ["ahmed","osama","sayed","stop","samara"];
    let myEmployees = ["amgad","samah","ameer","oamr","othman","amany","samia"];
    
    //document.write(`<div>we have ${myAdmins.length - 2} admins</div>`);
    
    let admins = [];
    
    for(let i = 0; i < myAdmins.length; i++) {
        if(myAdmins[i] === "stop") {
            break;
        }
        admins.push(myAdmins[i]);
    }
    document.write("we have"+admins.length+"admins<br>");
    
    for(let j = 0; j < admins.length; j++) {
        let count = 1;
        document.writeln("<hr>");
        document.write("the admin for team " +(j + 1)+ "is" +admins[j]);
        document.write("<h3>team members</h3>");
        for(let w = 0; w < myEmployees.length; w++) {
            if(myEmployees[w][0] === admins[j][0]) {
                document.write(count+"-"+myEmployees[w]+"<br>");
                count++;
            }
        }
    }
    */
    
    /*
        Function
    */
    //console.log(typeof console.log);
    /*
    function sayHello(userName) {
        console.log(`hi ${userName}`);
    }
    sayHello("mohammad");
    sayHello("osama");
    sayHello("ahmed");
    */
    
    /*
        function advanced examples
    */
    /*
    function sayHello(userName, age) {
        if(age < 20) {
            console.log(`app is not suitable for you`);
        }else {
            console.log(`hi ${userName} your age ${age}`);
        }
    }
    sayHello("mohammad",15);
    sayHello("osama",22);
    sayHello("ahmed",10);
    
    function generateYears(start, end, exclude) {
        for(let i = start; i <= end; i++) {
            if(i === exclude) {
                continue;
            }
            console.log(i);
        }
    }
    generateYears(1999, 2021, 2020);
    */
    
    /*
        Function
        - return
        - automatic semicolon insertion [no line terminator allowed]
        - interruptting
    */
    /*
    function sayHello(userName) {
        return `hello ${userName}`;
    }
    //console.log(sayHello("osama"));
    
    let result = sayHello("osama");
    console.log(result);
    
    function calc(num1, num2) {
        return num1 + num2;
    }
    let result1 = calc(10, 20);
    console.log(result1 + 100);
    
    function generate(start1, end1) {
        for(let i = start1; i <= end1; i++) {
            console.log(i);
            if(i === 15) {
                return `interruptting`;
            }
        }
    }
    generate(10, 20);
    
    function generate(start1, end1) {
        for(let i = start1; i <= end1; i++) {
            if(i === 15) {
                return `interruptting`;
            }
            console.log(i);
        }
    }
    generate(10, 20);
    */
    
    /*
        funcation
        - default function parameters
        - function parameters default [undefined]
        - old strategies [condition + logical or]
    */
    /*
    //Methods 
    function sayHello1(username, age) {
        return `hello ${username} your age is ${age};`
    }
    
    console.log(sayHello1("mohammad", 36));
    
    //Methods 1
    function sayHello2(username1, age1) {
        if(age1 === undefined) {
            age1 = "unknown";
        }
        return `hello ${username1} your age is ${age1}`;
    }
    
    console.log(sayHello2("osama"));
    
    //Methods 2
    function sayHello3(username2, age2) {
        age2 = age2 || "unknown";
        return `hello ${username2} your age is ${age2}`;
    }
    
    console.log(sayHello3("abd"));
    
    //Methods 3
    function sayHello4(username3 = "unknown", age3 = "unknown") {
        return `hello ${username3} your age is ${age3}`;
    }
    
    console.log(sayHello4());
    */
    
    /*
        Function
        - rest parameters
        - only one allowed
        - must be last element
    */
    /*
    // rest parameters and just only ...numbers <= just one at least things
    function calc(...numbers) {
        //console.log(Array.isArray(numbers));
    
        let result1 = 0;
        for(let i = 0; i < numbers.length; i++) {
    
            result1 += numbers[i];
            //return result1;
        }
        return `final result is ${result1}`;
    }
    console.log(calc(10,20,10,30,50));
    */
    
    /*
        function advanced practice
        - parameters
        - default
        - rest
        - loop
        - condition
    */
    /*
    function showInfo(us = "Un", ag = "Un", rt = 0, show = "Yes", ...sk) {
        document.write(`<div>`);
        document.write(`<h2>welcome, ${us}</h2>`);
        document.write(`<p>age: ${ag}</p>`);
        document.write(`<p>hour rate: $${rt}</p>`);
        if(show === "Yes") {
            if(sk.length > 0) {
                document.write(`<p>skills: ${sk.join(" | ")}</p>`);
            }else {
                document.write(`<p>skills: no skills</p>`);
            }
            //document.write(`<p>${sk.join(" | ")}</p>`);
            //console.log("show skills");
        }else{
            document.write(`<p>skills is hidden</p>`);
            //console.log("do not show skills");
        }
        document.write(`</div>`);
    }
    
    showInfo("Mhmd", 36, 20, "No", "html", "css");// "any think" skills is hidden | "yes" skills ....
    */
    
    /*
        challenge
    */
    /*
    function showDetails(...data) {
        let name,age,isAvailable;
    
        for(let i = 0; i < data.length; i++) {
            typeof (data[i]) === "string" ?
                name1 = data[i]
            :typeof (data[i]) === "number" ? 
                age = data[i]
            : data[i] === true ?
                isAvailable = "Available" : isAvailable = "Not Available"
            }
    
            result = `<div>
                    <h2>hello ${name}, your age is ${age},
            you are ${isAvailable} for hire</h2>
                </div>`;
            document.write(result);    
    }
    showDetails("mohmdf",38,true);
    showDetails(38,"mohmd",true);
    showDetails(true,38,"mohmd");
    showDetails(false,"mohmd",36);
    */
    
    /*
        function
        - anonymous function
        - calling named function vs anonymous function
        - argument to other function
        - task without name
        - settimeout
    */
    
    /*
    //console.log(calc(10,20));
    //function calc(num3, num4) {
      //  return num3 + num4;
    //}
    
    function sayHello5() {
        console.log("hello mohmd");
    }
    
    let calculator = function (num3,num4) {
        return num3 + num4;
    };
    
    console.log(calculator(10,20));
    
    document.getElementById("show").onclick = sayHello5;
    
    setTimeout(function() {
        console.log("good");
    }, 2000);// after to 2s print good
    */
    
    /*
        function
        - function inside function
        - return function
    */
    /*
    // example 1
    function sayMessage(fName, lName) {
        let message = `hello`;
        // nested function
        function concatMsg() {
            message = `${message} ${fName} ${lName}`;
        }
        concatMsg();
        return message;
    
    }
    
    console.log(sayMessage("mohmd","ahmed"));
    
    // example 2
    function sayMessage(fName, lName) {
        let message = `hello`;
        // nested function
        function concatMsg() {
            return `${message} ${fName} ${lName}`;
        }
        return concatMsg();
    }
    
    console.log(sayMessage("mohmd","ahmed"));
    
    // example 3
    function sayMessage(fName, lName) {
        let message = `hello`;
        // nested function
        function concatMsg() {
            function getFullName() {
                return `${fName} ${lName}`;
            }
            return `${message} ${getFullName()}`;
        }
        return concatMsg();
    }
    
    console.log(sayMessage("mohmd","ahmed"));
    */
    
    /*
        function
        - arrow function
        -- regular vs arrow [param + no param]
        -- multiple lines 
    */
    /*
    let print = function () {
        return 10;
    };
    
    let print1 = (_) => 10;//one line or statment just // () or _ or (_) or 
    
    let print2 = function (num) {
        return num;
    }
    
    let print3 = num => num;//one parameter name example num <=
    
    let print4 = function (num5, nmu6) {
        return num5 + nmu6;
    };
    
    let print5 = (num5, num6) => num5 + num6;
    
    console.log(print());
    console.log(print1());
    console.log(print2(100));
    console.log(print3(100));
    console.log(print4(50,100));
    console.log(print5(50,100));
    */
    
    /*
        scope 
        - global and local scope
    */
    /*
    var a = 1;
    let b = 2;
    
    function showText() {
        var a = 10;
        let b = 20;
        console.log(`function - from local ${a}`);//local
        console.log(`function - from local ${b}`);//local
    }
    
    console.log(`from global ${a}`);//global
    console.log(`from global ${b}`);//global
    
    showText();
    */
    
    /*
        scope
        - block scope [if, switch, for]
    */
    /*
    var x = 10;
    if(10 === 10) {
        //var x = 50;
        let x = 50;
    }
    
    console.log(`from global ${x}`);
    
    var x = 10;
    if(10 === 10) {
        //var x = 50;
        let x = 50;
        console.log(`form if block ${x}`);
    }
    
    console.log(`from global ${x}`);
    */
    
    /*
        scope
        - lexical scope
    
        search
        - execution context
        - lexical environment
    */
    /*
    //let a = 50;
    function parent() {
        let a = 10;
    
        function Child () {
            //let a = 20;
            console.log(a);
    
            function grand () {
                let b = 100;
                console.log(`from grand ${a}`);
                console.log(`from grand ${b}`);
            }
            grand();
        }
        Child();
    }
    parent();
    */
    
    /*
        function arrow challenges
    */
    /*
    let names = (...input) => {return `string [${input.join("],[")}] => Done !`};
    console.log("A","B","C","D","E");
    
    let myNumbers = [20,50,10,60];
    
    let calcL = (one, two, ...numbers) => {return - one - two + numbers[0] + numbers[1]};
    
    console.log(calcL(10,20,50,60));
    */
    
    /*
        Higher Order Function
        ---> is a function that accepts functions as parameters and/or returns a function.
    
        - Map
        --- method creates a anew array 
        --- populated with the results of calling a provided function on every element
        --- in the calling array
    
        Syntax map(callBackFunction(element, index, array) {}, thisArg)
        - element
        - index
        - array
    */
    /*
    let myNums = [1,2,3,4,5,6]
    
    let newArray = [];
    
    for (let i = 0; i < myNums.length; i++) {
        newArray.push(myNums[i] + myNums[i]);
    }
    
    console.log(newArray);
    
    // same idea with map
    let addSelf = myNums.map(function(element, index, array){
        //console.log(`current element => ${element}`);
        //console.log(`current index => ${index}`);
        //console.log(`current array => ${array}`);
        //console.log(`this => ${this}`);
        return element + element;
    }, 10)
    
    console.log(addSelf);
    
    let addSelf1 = myNums.map((a) => a + a);
    console.log(addSelf1);
    
    function addition(ele) {
        return ele + ele;
    }
    
    let add = myNums.map(addition);
    
    console.log(add);
    */
    
    /*
        Map
        - swap cases
        - inverted numbers
        - ignore boolean value
    */
    /*
    let swappingCases = "elZERo";
    let invertedNumbers = [1, -10, -20, 15, 100, -30];
    let ignoreNumbers = "Elz123er4o";
    
    let sw = swappingCases.split("").map(function(e){
        // condition ? true : false
        return e === e.toUpperCase() ? e.toLowerCase() : e.toUpperCase();
    })
    .join("");
    
    console.log(sw);
    // arrow function version
    
    let SW = swappingCases
        .split("")
        .map((e) => (e === e.toUpperCase() ? e.toLowerCase() : e.toUpperCase())) // condition ? true : false
        .join("");
    
    
    console.log(SW);
    
    let inv = invertedNumbers.map(function(e){
        return - e;
    });
    
    console.log(inv);
    
    let ign = ignoreNumbers.split("").map(function(e){
        return isNaN(parseInt(e)) ? e : "" ;
    })
    .join("");
    
    console.log(ign);
    */
    
    /*
        - Filter
        --- method creates a new array
        --- with all elements that pass the test implemented by the provided function.
    
        Syntax filter(callBackFuction(element, index, array) {}, thisArg)
        - element
        - index
        - array
    */
    /*
    // get friends with name starts with A
    let friends = ["ahmed","sameh","sayed","asmaa","amgad","israa"];
    
    let filterdFriends = friends.filter(function (el) {
        return el.startsWith("a") ? true : false; // condition ? true : false <= was condition
    });
    
    console.log(filterdFriends);
    
    // get even numbers only
    let numberss = [11,20,2,5,17,10];
    
    let evenNumbers = numberss.filter(function (el) {
        return el % 2 === 0 ? true : false; // condition ? true : false <= was condition
    });
    
    console.log(evenNumbers);
    
    // test map vs filter
    let addMap = numberss.map(function(el) {
        return el + el;
    });
    
    console.log(addMap);
    
    let addFilter = numberss.filter(function(el) {
        return el + el;
    });
    
    console.log(addFilter);
    */
    
    /*
        Filter 
        - filter longest word by number
    */
    /*
    // filter words more than 4 characters
    let sentence = "i love foood code too playing much";
    
    let smallWords = sentence.split(" ").filter(function(ele) {
        return ele.length <= 4;
    }).join(" ");
    
    console.log(smallWords);
    
    let smallWordss = sentence.split(" ").filter(function(ele) {
        return ele.length > 4;
    }).join(" ");
    
    console.log(smallWordss);
    
    let ignoreNumbers = "Elz123er4o";
    
    let ign = ignoreNumbers
        .split("")
        .filter(function (ele) {
            return isNaN(parseInt(ele));
        })
        .join("");
    
    console.log(ign);    
    
    // filter strings + multiply
    let mix = "A13BS2ZX";
    
    let mixedContent = mix.split("").filter(function (ele){
        return !isNaN(parseInt(ele));
    }).map(function (ele) {
        return ele * ele;
    })
    .join("");
    
    console.log(mixedContent);
    */
    
    /*
        - Reduce
        --- method executes a reducer function on each element of the array,
        --- resulting in a single output value
    
        Syntax
        reduce(callBackFunc(Accumulator, Current Val, Current Index, Source Array) {}, initialValue)
        - Accumulator
        - Current Val
        - Current Index
        - Source Array
    */
    /*
    let nums = [10,20,15,30];
    
    let add = nums.reduce(function (acc, current, index, arr) {
        console.log(`Acc => ${acc}`);
        console.log(`Current Element => ${current}`);
        console.log(`Current Element Index => ${index}`);
        console.log(`Array => ${arr}`);
        console.log(acc + current);
        console.log(`#############`);
        return acc +current;
    }, 5);// 5 initial value begin in 5 <= [0]
    
    console.log(add);
    */
    /*
    let theBiggest = ["Bla","Propaganda","Other","AAA","Battery","Test","Propaganda_Two"];
    
    let check = theBiggest.reduce(function (acc, current) {
        console.log(`Acc => ${acc}`);
        console.log(`Current Element => ${current}`);
        console.log(acc.length > current.length ? acc : current);
        console.log(`#############`);
        return acc.length > current.length ? acc : current;
    });
    
    console.log(check);
    
    let removeChars = ["E", "@","L","Z","@","@","E","R","@","O",];
    
    let finalString = removeChars.filter(function (ele) {
        return !ele.startsWith("@");
    })
    .reduce(function (acc, current) {
        return  `${acc} ${current}`;
    });
    
    console.log(finalString);
    */
    
    /*
        - forEach
        --- method executes a provided function once for each array element.
    
        Syntax
        forEach(callBackFunc(element, Index, Array) { }, thisArg)
        - element
        - Index
        - Array
    */
    /*
    let allLis = document.querySelectorAll("ul li");
    let allDivs = document.querySelectorAll(".content div");
    
    allLis.forEach(function (ele) {
        //console.log(ele);//console.log(ele.innerHTML);
        ele.onclick = function () {
            allLis.forEach(function (ele) {
                // Remove Active Class From All Elements
                ele.classList.remove("active");
            })
            // Add Active Class To This Element
            this.classList.add("active");
            // Hide All Divs
            allDivs.forEach(function (ele){
                ele.style.display = "none";
            });
        };
    });
    
    //console.log(allLis);
    */
    
    /*
        challenge
    */
    /*
    let myString = "1,2,3,EE,l,z,e,r,o,_,W,e,b,_,S,c,h,o,o,l,2,0,Z";
    
    let solution = myString.split("").filter(function (ele) {
        return (ele >= 'a' && ele <= 'y') || (ele >= 'A' && ele <= 'Y') || ele === "_";
    }).reduce(function (acc, current) {
        return `${acc} ${current}`;
    }).slice(true).replaceAll("_","");
    
    console.log(solution);
    */
    
    /*
        Object
        - Intro and What Is Object
        - Testing Window Object
        - Accessing Object
    */
    
    // typeOf window.location <= "object"
    // typeOf window.location.href <= "string" => "Name Location"
    // typeOf window.location.assign => go to ("https://google.com")
    /*
    let users = {
        // Properties
        theName: "Mohmd",
        theAge: 38,
        // Methods
        sayHello: function () {
            return `Hello`;
        },
    };
    
    console.log(users.theName);
    console.log(users.theAge);
    console.log(users.sayHello());
    */
    
    /*
        Object
        - Dig Deeper
        - Dot Notation vs Bracket Notation
        - Dynamic Property Name
    */
    /*
    let myVar = "country";
    // "theName0" or theName0
    let user0 = {
        theName0: "Mohmd",
        country: "Jordan"
        //"country of": "Jordan",
    };
    
    console.log(user0.theName0);
    console.log(user0.country);// Jodan
    console.log(user0.myVar);// user .country  => undefined
    console.log(user0[myVar]);// Jordan
    //console.log(user0["theName0"]);// bracket notation theName0 or ["theName0"]
    //console.log(user0["country of"]);// bracket notation ["country of"]
    */
    
    /*
        Object
        - Nested object and trainings
    */
    /*
    let available = true;
    
    let userr = 
    {
        name: "mohmd",
        age: 38,
        skills: ["html","css","js"],
        available: false,
        addresses: {
            kas: "riyadh",
            jordan: {
                one: "irbid",
                two: "amman"
            },
        },
        checkAv: function () {
            if (available === true) {
                return `Free for work`;
            }else{
                return `Not free`
            }
        },
        checkAV: function () {
            if (userr.available === true) {
                return `Free for work`;
            }else{
                return `Not free`
            }
        }
    };
    
    console.log(userr.name);
    console.log(userr.age);
    console.log(userr.skills);
    console.log(userr.skills.join(" | "));
    console.log(userr.skills[2]);
    console.log(userr.addresses);
    console.log(userr.addresses.kas);
    console.log(userr.addresses.jordan.one);
    console.log(userr["addresses"].jordan.one);
    console.log(userr["addresses"]["jordan"].one);
    console.log(userr["addresses"]["jordan"]["one"]);
    
    console.log(userr.checkAv());
    console.log(userr.checkAV());
    */
    
    /*
        Object
        - Create with new keyword new object();
    */
    /*
    let user_s = new Object({
        age: 20,
    });
    
    console.log(user_s);
    
    user_s.age = 38;
    user_s["country"] = "jordan";
    
    user_s.sayHello = function () {
        return `hello`;
    };
    
    console.log(user_s);
    console.log(user_s.age);
    console.log(user_s.country);
    console.log(user_s.sayHello());
    */
    
    /*
        function this keyword
        - global object
        - test variables with window and this
        - global context
        - function context
    
        search
        - strict mode
    */
    /*
    console.log(this);
    console.log(this === window);
    
    myVar = 100;
    
    console.log(window.myVar);
    console.log(this.myVar);
    
    function sayHello() {
        console.log(this);
        return this;
    }
    sayHello();
    
    console.log(sayHello() === window);
    
    document.getElementById("cl").onclick = function () {
        console.log(this);
    };
    
    let user1 = {
        age: 38,
        ageInDays: function () {
            console.log(this);
            return this.age * 365; //<= or return user1.age * 365; 
        },
    };
    
    console.log(user1.age);
    console.log(user1.ageInDays());
    */
    
    /*
        Object
        - create object with create method
    */
    /*
    let useer2 = {
        age: 20,
        doubleAge: function () {
            return this.age * 2;
        },
    };
    
    console.log(useer2);
    console.log(useer2.age);
    console.log(useer2.doubleAge());
    
    let obj = Object.create({});
    obj.a = 100;
    console.log(obj);
    
    let copyObj = Object.create(useer2);
    
    copyObj.age = 30;
    
    console.log(copyObj);
    console.log(copyObj.age);
    console.log(copyObj.doubleAge());
    */
    
    /*
        Object
        - create object with assign method
    */
    /*
    let obj1 = {
        prop1: 1,
        meth1: function () {
            return this.prop1;
        },
    };
    
    let obj2 = {
        prop2: 2,
        meth2: function () {
            return this.prop2;
        },
    };
    
    let targetObject = {
        prop1: 20,
        prop3: 3,
    };
    
    let finalObject = Object.assign(targetObject, obj1, obj2);
    
    finalObject.prop1 = 200;
    finalObject.prop4 = 4;
    
    console.log(finalObject);
    
    let newObject = Object.assign({}, obj1, {prop5: 5, prop6: 6});
    
    console.log(newObject);
    */
    
    /*
        Dom [get / set elements conent and attributes]
        - innerHTML
        - textContent
        - change attributes directly
        - change attributes with methods
        --- getAttribute
        --- setAttribute
    
        Search
        - innerText
    */
    /*
    let myElement = document.querySelector(".js");
    
    console.log(myElement.innerHTML);
    console.log(myElement.textContent);
    
    myElement.innerHTML = "text from <span>main.js</span> file"; 
    myElement.textContent = "text from <span>main.js</span> file"; 
    
    document.images[0].src = "https://google.com";
    document.images[0].alt = "Alternate";
    document.images[0].title = "Picture";
    document.images[0].id = "pic";
    document.images[0].className = "img";
    
    let myLink = document.querySelector(".link");
    
    console.log(myLink.getAttribute("class"));
    console.log(myLink.getAttribute("href"));
    
    myLink.setAttribute("href", "https://twitter.com");
    myLink.setAttribute("title", "Twitter");
    
    //myLink.getAttribute("class");
    //myLink.getAttribute("href");
    */
    
    /*
        Dom [Check Attributes]
        - Element.attributes
        - Element.hasAttribute
        - Element.hasAttributes
        - Element.removeAttribute
    */
    /*
    console.log(document.getElementsByTagName("p")[0].attributes);
    
    let myP = document.getElementsByTagName("p")[0];
    
    if (myP.hasAttribute("data-src")) {
        if (myP.getAttribute("data-src") === "") {
            myP.removeAttribute("data-src");
        } else {
            myP.setAttribute("data-src", "New Value");
        }
        //console.log(`Found`);
    } else {
        console.log(`Not Found`);
    }
    
    if (myP.hasAttributes()) {
        console.log(`Has Attributes`);
    }
    
    if (document.getElementsByTagName("div")[0].hasAttributes()) {
        console.log(`Has Attributes`);
    } else {
        console.log(`Div Has No Attributes`);
    }
    */
    
    /*
        Dom [Create Elements]
        - createElement
        - createComment
        - createTextNode
        - createAttribute
        - appendChild
    */
    /*
    let myElement0 = document.createElement("div");
    let myAttr = document.createAttribute("data-custom");
    let myText = document.createTextNode("Product One");
    let myComment = document.createComment("This Is Div");
    
    myElement0.className = "product";
    myElement0.setAttributeNode(myAttr);
    myElement0.setAttribute("data-test", "Testing");
    
    // Append Comment To Element
    myElement0.appendChild(myComment);
    
    // Append Text To Elemet
    myElement0.appendChild(myText);
    
    // Append Comment To Element
    //myElement0.appendChild(myComment);
    
    // Append Element To Body
    document.body.appendChild(myElement0);
    
    //console.log(myElement0);
    */
    
    /*
        DOM [Create Elements]
        - Practice Product With Heading And Paragraph
    */
    /*
    for (let i = 0; i <= 100; i++) {
        let myMainElement = document.createElement("div");
        let myHeading = document.createElement("h2");
        let myParagraph = document.createElement("p");
    
        let myHeadingText = document.createTextNode("Product Title" + [i]);
    
        let myParagraphText = document.createTextNode("Product Description" + [i]);
    
        // Add Heading Text
        myHeading.appendChild(myHeadingText);
    
        // Add Heading To Main Element
        myMainElement.appendChild(myHeading);
    
        // Add Paragraph Text
        myParagraph.appendChild(myParagraphText);
    
        // Add Paragraph To Main Element
        myMainElement.appendChild(myParagraph);
    
        myMainElement.className = 'product';
    
        document.body.appendChild(myMainElement);
    }
    */
    
    /*
        Dom [deal with childrens]
        - children
        - childNodes
        - firstChild
        - LastChild
        - firstElementChild
        - lastElementChild
    */
    /*
    let myElement1 = document.querySelector("div");
    
    console.log(myElement1);
    console.log(myElement1.children);
    console.log(myElement1.children[1]);
    console.log(myElement1.childNodes[0]);
    console.log(myElement1.firstChild);
    console.log(myElement1.lastChild);
    console.log(myElement1.firstElementChild);
    console.log(myElement1.lastElementChild);
    */
    
    /*
        Dom [Events]
        - Use Events On HTML
        - Use Events On JS
        --- onclick
        --- oncontextmenu
        --- onmouseenter
        --- onmouseleave
    
        --- onload
        --- onscroll
        --- onresize
    
        --- onfocus
        --- onblur
        --- onsubmit
    */
    
    //let myBtn = document.getElementById("btn");
    
    // onclick="console.log('Clicked')" <= in button at html print Clicked
    //myBtn.onclick = function () {
      //  console.log("Clicked");
    //};
    
    //myBtn.oncontextmenu = function () {
      //  console.log("Clicked");
    //};
    
    //myBtn.onmouseenter = function () {
      //  console.log("Clicked");
    //};
    
    //myBtn.onmouseleave = function () {
      //  console.log("Clicked");
    //};
    
    //window.onscroll = function () {
      //  console.log("Scroll");
    //};
    
    //window.onresize = function () {
      //  console.log("Resize");
    //};
    
    /*
        Dom [Events]
        - Validate Form Practice
        - Prevent Default
    */
    /*
    //document.links[0].onmouseenter= function (event) {
       // console.log(event);
    //};
    
    let userInput = document.querySelector("[name = 'username']");
    let ageInput = document.querySelector("[name = 'age']");
    
    //console.log(userInput);
    
    document.forms[0].onsubmit = function (e) {
        let userValid = false;
        let ageValid = false;
    
        //console.log(userInput.value);
        //console.log(userInput.value.length);
    
        if (userInput.value !== "" && userInput.value.length <= 10) {
            //console.log("Valid");
            userValid = true;
        }
    
        if (ageInput.value !== "") {
            ageValid = true; 
        }
    
        if (userValid === false || ageValid === false) {
            e.preventDefault();
        }
    
    };
    
    document.links[0].onclick= function (event) {
        console.log(event);
        event.preventDefault();
    };
    */
    
    /*
        DOM [Events Simulation]
        - click
        - focus
        - blur
    */
    /*
    let one = document.querySelector(".one");
    let two = document.querySelector(".two");
    
    window.onload = function () {
        two.focus();
    };
    
    one.onblur = function () {
        document.links[0].click();
    };
    */
    
    /*
        DOM [Class List]
        - classList
        --- length
        --- contains
        --- item(index)
        --- add
        --- remove
        --- toggle
    */
    /*
    let element0 = document.getElementById("my-div");
    
    console.log(element0.classList);
    console.log(typeof element0.classList);
    console.log(element0.classList.contains("mohmmd"));
    console.log(element0.classList.contains("show"));
    console.log(element0.classList.item("0"));
    
    //element0.onclick = function () {
      //  element0.classList.add("add-one", "add-two");
    //};
    
    //element0.onclick = function () {
      //  element0.classList.remove("one", "two");
    //};
    
    //element0.onclick = function () {
      //  element0.classList.toggle("mohmd"); // don't Found <= mohmd 
    //};
    
    element0.onclick = function () {
        element0.classList.toggle("show");
    };
    */
    
    /*
        DOM [CSS]
        - style
        - cssText
        - removeProperty(propertyName) [Index, Stylesheet]
        - setProperty(propertyName, value, priority)
    */
    /*
    let element1 = document.getElementById("my-div");
    
    // methods 1
    element1.style.color = "red";
    element1.style.background = "blue";
    element1.style.fontWeight = "bold";
    
    // methods 2
    element1.style.cssText = "font-weight: bold; color: green; opacity: 0.9";
    
    
    //----------------------
    element1.style.removeProperty("color");
    element1.style.setProperty("font-size", "40px", "important");
    
    //document.styleSheets[0].rules[0].style.removeProperty("line-height") //error
    //document.styleSheets[0].rules[0].style.removeProperty("background-color", "red", "important") //error
    */
    
    /*
        DOM [Deal With Elements]
        - before [Element || String]
        - after [Element || String]
        - append [Element || String]
        - prepend [Element || String]
        - remove
    */
    
    //let element2 =document.getElementById("my-div");
    //let createdP = document.createElement("p");
    
    //element2.before("Hello From JS");
    //element2.after("Hello From JS");
    //element2.after(createdP);
    //element2.before(createdP);
    //element2.append("hello js");
    //element2.prepend("hello js");
    //element2.append(createdP);
    //element2.prepend(createdP);
    //element2.remove();
    
    /*
        DOM [Traversing]
        - nextSibling
        - previousSibling
        - nextElementSibling
        - previousElementSibling
        - parentElement
    */
    /*
    let span = document.querySelector(".two");
    
    //console.log(span.nextSibling);
    //console.log(span.nextElementSibling);
    //console.log(span.nextElementSibling.remove());
    //console.log(span.previousElementSibling);
    //console.log(span.previousSibling);
    //console.log(span.parentElement);
    
    console.log(span.parentElement);
    
    //span.onclick = function () {
      //  span.parentElement.remove()
        //span.parentElement.style.opacity = '0';
    //}
    */
    
    /*
        DOM [Cloning]
        - cloneNode(Deep)
    */
    /*
    let myP1 = document.querySelector("p").cloneNode(true);
    let myDiv = document.querySelector("div");
    
    //console.log(myP1);
    
    myP1.id = `${myP1.id}-clone`;
    
    myDiv.appendChild(myP1);
    */
    
    /*
        DOM [Add Event Listener]
        - addEventListener
        - Use Without On
        - Attach Mu;tiple Events
        - Error Test
    
        Search
        - Capture & Bubbling JavaScript
        - removeEventListener
    */
    /*
    let myP2 = document.querySelector("p");
    
    myP2.onclick = one1;
    myP2.onclick = two2;
    
    function one1() {
        console.log("Message From onClick 1");
    };
    
    function two2() {
        console.log("Message From onClick 2");
    };
    
    window.onload = "mohmd";
    
    myP2.addEventListener("click", function () {
        console.log("Message From onClick 1 Event");
    });
    
    myP2.addEventListener("click", one1);
    myP2.addEventListener("click", two2);
    
    //myP2.addEventListener("click", "string");// Error
    
    myP2.onclick = function () {
        let newP = myP2.cloneNode(true);
        newP.className = "clone";
        document.body.appendChild(newP);
    };
    
    //let cloned = document.querySelector(".clone"); // Error
    
    //cloned.onclick = function () {
      //  console.log("Iam Cloned");
    //};
    
    document.addEventListener("click", function (e) {
        if (e.target.className === 'clone') {
            console.log("iam cloned");
        }
    });
    */
    
    /*
        challenge
    */
    /*
    // body styling
    document.body.style.cssText = "margin: 0px; background-color: rgb(236, 236, 236); font-family: Tahoma,Arial;";
    
    // header 
    // create header
    let head = document.createElement("header");
    head.style.cssText = "display: flex; padding: 20px; background-color: rgb(255, 255, 255); justify-content: space-between; align-items: center;";
    head.classList.add("website-head");
    document.body.appendChild(head);
    
    // create logo
    let logo = document.createElement("div");
    logo.classList.add("logo");
    logo.title = "website logo";
    logo.style.cssText = "font-weight: bold; color: rgb(35, 169, 110); font-size: 26px;";
    logo.innerHTML = "MohmdCs";
    head.appendChild(logo);
    
    // ul elements
    let ul = document.createElement("ul");
    let headEle = ["Home", "About", "Service", "Contact"];
    for (i = 0; i < headEle.length; i++) {
        let li = document.createElement("li");
        li.style.margin = "5px";
        li.style.color = "rgb(234, 200, 133)";
        li.innerHTML = headEle[i];
        ul.appendChild(li);
    }
    ul.classList.add("content");
    ul.style.cssText = "padding: 0px; margin: 0px; display: flex; list-style: none;";
    head.appendChild(ul);
    
    
    // body 
    
    // create content
    let content = document.createElement("div");
    document.body.appendChild(content);
    content.classList.add("content");
    content.style.cssText = "display: flex; padding:20px; flex-wrap: wrap; justify-content: center; gap: 20px; min-height: calc(100vh - 142px); box-sizing: border-box;";
    
    
    // create product
    for (i = 0; i < 15; i++) {
        let product = document.createElement("div");
        product.classList.add("product");
        product.style.cssText = "padding: 20px; background-color: rgb(255, 255, 255); border: 1px solid rgb(221, 221, 211); width: calc((100% - 40px) / 3); box-sizing: border-box; text-align: center; color: rgb(136, 136, 136); border-radius: 6px;";
        let span = document.createElement("span");
        span.style.cssText = "font-size: 40px; color: black; font-weight: normal; display: block; margin-bottom: 10px; margin-top: 10px;";
        span.textContent = i + 1;
        product.appendChild(span);
        product.append("Product");
        content.appendChild(product);
    }
    
    
    // footer 
    
    // create footer
    let foot = document.createElement("footer");
    foot.classList.add("footer");
    foot.style.cssText = "background-color: rgb(35, 169, 110); font-size: 26px; text-align: center; padding: 20px; color: rgb(255, 255, 255);";
    foot.append("Copyright 2021");
    document.body.appendChild(foot);
    */
    
    




