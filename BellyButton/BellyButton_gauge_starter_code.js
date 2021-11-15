// Create the buildChart function.
function buildCharts(sample) {
  // Use d3.json to load the samples.json file 
  d3.json("samples.json").then((data) => {
    console.log(data);

    // Create a variable that holds the samples array. 

    // Create a variable that filters the samples for the object with the desired sample number.

    // 1. Create a variable that filters the metadata array for the object with the desired sample number.

    // Create a variable that holds the first sample in the array.
    var metaFilter = data.metadata.filter(sampleObj => sampleObj.id == sample);

    // 2. Create a variable that holds the first sample in the metadata array.
    var metaResult = metaFilter[0];

    // Create variables that hold the otu_ids, otu_labels, and sample_values.
    var otuIDs = idData.otu_ids;
    var otuLable = idData.otu_labels;
    var sampleValues = idData.sample_values;

    // 3. Create a variable that holds the washing frequency.
    var washFreq = parseFloat(metaResult.wfreq);
    // Create the yticks for the bar chart.

    // Use Plotly to plot the bar data and layout.
    Plotly.newPlot();
    
    // Use Plotly to plot the bubble data and layout.
    Plotly.newPlot();
   
    
    // 4. Create the trace for the gauge chart.
    var gaugeData = [{
      domain: {
        x: [0,1],
        y: [0,1]
      },
      value: washFreq,
      title: {text: 'Belly Button Washing Frequency <br>Scrubs per Week'},
      type: 'indicator',
      mode: 'gauge+number',
      gauge: {
        axis: {
          range: [0,10],
          tickwidth:2
        },
        bar: {color: 'black'},
        steps:[
          {range: [0,2], color:'red'},
          {range: [2,4], color:'orange'},
          {range: [4,6], color:'yellow'},
          {range: [6,8], color:'limegreen'},
          {range: [8,10], color:'green'}
        ]
      }     
    }
     
    ];
    
    // 5. Create the layout for the gauge chart.
    var gaugeLayout = {  
      width: 600,
      height: 450,
      margin: {t: 0, b:0},
      paper_bgcolor: 'rgba(0,0,0,0)',
      background_color: 'rgba(0,0,0,0)'
    };
    // 6. Use Plotly to plot the gauge data and layout.
    Plotly.newPlot('gauge', gaugeData, gaugeLayout)
  });
}