const dataSource = {
      "chart": {
        "caption": "Greenhouse gas emissions produced by foods ",
        "subCaption": "During Production",
        "yAxisName":"Kg Co₂E",
         "showValues":"0",
        "yAxisMaxValue":"25",
        "yAxisMinValue":"0",
         "showToolTip":"1",
        "theme": "fusion"
      },
      "data": [{
          "label": "Lamb",
          "value": "22"
        },
        {
          "label": "Beef",
          "value": "16"
        },
        {
          "label": "Farmed Salmon",
          "value": "4"
        },
        {
          "label": "White Rice",
          "value": "3.9"
        },
        {
          "label": "Brown Rice",
          "value": "3.54"
        },
        {
          "label": "Eggs",
          "value": "2.5"
        }
      ]
    };

FusionCharts.ready(function() {
  var myChart = new FusionCharts({
    type: "spline",
    renderAt: "chart-container",
    width: "100%",
    height: "400",
    dataFormat: "json",
    dataSource
  }).render();
   function handler(eventObj, dataObj) {

     var id =eventObj.data.dataIndex;
     if(id===0)
       {
         myChart.setChartAttribute("plottooltext", "<div id='nameDiv' style='font-size: 12px; font-weight:bold; padding-bottom: 3px; text-align: center; display: inline-block;border-style: none; background-color: #ffffff;' ><img style='height:40px; width:50px;background-color: #ffffff;' src='https://2.bp.blogspot.com/-yiqNTXFRiAI/UICj02XTQ0I/AAAAAAAAAIg/xVPoKagJEm0/s1600/CABRA.jpg'</div>{br}Co<sub>2</sub>E: <b>$dataValue</b>");
       }
     else if(id===1){
       myChart.setChartAttribute("plottooltext", "<div id='nameDiv' style='font-size: 12px; font-weight:bold; padding-bottom: 3px; text-align: center; display: inline-block;border-style: none;background-color: #ffffff;' ><img style='height:50px; width:60px;background-color: #ffffff;' src='https://banner2.kisspng.com/20180221/vuq/kisspng-sheep-cattle-horse-livestock-farm-vector-animal-cow-5a8d75a1e781b6.1693995215192201299483.jpg'</div>{br}Co<sub>2</sub>E: <b>$dataValue</b>");
     }
       else if(id===2){
       myChart.setChartAttribute("plottooltext", "<div id='nameDiv' style='font-size: 12px; font-weight:bold; padding-bottom: 3px; text-align: center; display: inline-block;border-style: none;background-color: #ffffff;' ><img style='height:40px; width:50px;background-color: #ffffff;' src='https://banner2.kisspng.com/20180707/lqx/kisspng-sardine-coho-salmon-trout-atlantic-salmon-salmon-5b418018d671c4.2868322115310192888784.jpg'</div>{br}Co<sub>2</sub>E: <b>$dataValue</b>");
     }
       else if(id===3){
       myChart.setChartAttribute("plottooltext", "<div id='nameDiv' style='font-size: 12px; font-weight:bold; padding-bottom: 3px; text-align: center; display: inline-block;border-style: none;background-color: #ffffff;' ><img style='height:40px; width:50px;background-color: #ffffff;' src='https://cdn-a.william-reed.com/var/wrbm_gb_food_pharma/storage/images/5/1/8/1/1411815-1-eng-GB/Genetically-engineered-rice-proves-to-produce-high-yields-of-rotavirus-specific-antibody.jpg'</div>{br}Co2E: <b>$dataValue</b>");
     }
       else if(id===4){
       myChart.setChartAttribute("plottooltext", "<div id='nameDiv' style='font-size: 12px; font-weight:bold; padding-bottom: 3px; text-align: center; display: inline-block;border-style: none;' ><img style='height:40px; width:50px;' src='https://imageresizer.pollotropical.fuzzhq.com/resize/?source=https://koala-marketing-api-production.s3.amazonaws.com/pollo-tropical/assets/BrownRice.png&height=9999&width=600&max_quality=85'</div>{br}Co<sub>2</sub>E: <b>$dataValue</b>");
     }
       else if(id===5){
       myChart.setChartAttribute("plottooltext", "<div id='nameDiv' style='font-size: 12px; font-weight:bold; padding-bottom: 3px; text-align: center; display: inline-block;border-style: none;' ><img style='height:40px; width:50px;' src='https://us.123rf.com/450wm/andegro4ka/andegro4ka1504/andegro4ka150400029/39383340-stock-vector-broken-egg-shells-isolated-on-white-photo-realistic-vector-illustration.jpg?ver=6'</div>{br}Co<sub>2</sub>E: <b>$dataValue</b>");
     }
    }
  myChart.addEventListener("dataplotRollOver", handler);
  
});

