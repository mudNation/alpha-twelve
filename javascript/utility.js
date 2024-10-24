let slideIndex = 0;
let timeOut; 
let chartFontSize = 26; 
let myChart; 


//Sets the chart, slide and table
function start(){
    setChart(); 
    showSlides(); 
    tableStart(); 
}


// set font size of chart depending on window size
function setChartFontSize(){
    if(window.innerWidth > 1200){
        chartFontSize = 26; 
    }else if(window.innerWidth > 1000){
        chartFontSize = 22;
    }else if(window.innerWidth > 800){
        chartFontSize = 18;
    }else if(window.innerWidth > 600){
        chartFontSize = 14;
    }else{
        chartFontSize = 8;
    }
}

// configure the chart
function setChart(){
    const xValues = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const xMobValues = ["Ja", "Fe", "Ma", "Ap", "Ma", "Ju", "Ju", "Au", "Se", "Oc", "No", "De"]
    const chartData = [650, 870, 670, 400, 1000, 580, 850, 370, 840, 700, 950, 600]
    const barColors = "#8576FF";
    

    const ctx = document.getElementById('myChart').getContext('2d');
    const gridSpace = 6; 

    const grid = {
        display: true,
        borderDash: [gridSpace, gridSpace],
        lineWidth: 2,
        drawBorder: false,
        drawTicks: false,
    }

    setChartFontSize(); 

    const ticks = {
        padding: 16,
        font: {
            size: chartFontSize 
        },
        color: darkMode ? "white" : "#64748B"
    }

    if(myChart) {
        myChart.destroy()
    }

    myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: window.innerWidth > 780 ? xValues : xMobValues,
            datasets: [{
                data: chartData,
                backgroundColor: barColors,
                fill: false,
                borderColor: darkMode ? "white" : "#64748B"
            }]
        },
        options: {
            plugins: {
                legend: {
                    display: false // Hides the legend
                },
                
            },
            
            scales: {
                x: {
                    grid: {
                        // offset: false,
                        ...grid,
                        color: (context) => {
                            if(context.index % 2 === 0 && context.index <= 11 && context.index != 0){
                                // return "rgba(0, 0, 0, 0.1)"
                                return darkMode ? "white" : "#E2E8F0"
                            }
                        },
                    }, 

                    ticks
                },
                y: {
                    
                    min: 0, 
                    max: 1000,
                    ticks: {
                        stepSize: 200, 
                        ...ticks,
                    },
                    grid: {
                        // position: 'center',
                        ...grid,
                        color: (context) => {
                            if(context.index !== 5 && context.index !== 0){
                                // return "rgba(0, 0, 0, 0.1)"
                                return darkMode ? "white" : "#E2E8F0"
                            }
                        },
                        
                    }
                }
            }
        }
    });
}

// configures the slideshow
function showSlides(type = "next") {
    clearTimeout(timeOut)
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }

    if(type === "next"){
        slideIndex++;
    }else{
        slideIndex--;
    }
    
    if (slideIndex > slides.length) {slideIndex = 1}; 
    if(slideIndex <= 0 ) { slideIndex = 3}; 

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active-dot", "");
    }
    slides[slideIndex-1].style.display = "flex";  
    dots[slideIndex-1].className += " active-dot";
    timeOut = setTimeout(showSlides, 5000); // Change image every 2 seconds
}

// skips to next image in slide show
function nextSlide(){
    showSlides("next");
}


// skips to next previous image in slide show
function prevSlide(){
    showSlides("prev")
}


// reconfigure chart on window resize
function windowSizeChange(){
    // console.log(window.innerWidth)
    setChart(); 
}

// call the start function after page has loaded
window.addEventListener("load", start, false); 

// add listener for window resize to call windosizechange
window.addEventListener("resize", windowSizeChange, false); 