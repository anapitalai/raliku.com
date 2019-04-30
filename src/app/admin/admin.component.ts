import { Component, OnInit } from '@angular/core';

import * as go from 'gojs';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
;

  constructor() { 
    
  }

  ngOnInit() {
    var $ = go.GraphObject.make;

    var myDiagram =
      $(go.Diagram, "myDiagramDiv",
        {
          "undoManager.isEnabled": true, // enable Ctrl-Z to undo and Ctrl-Y to redo
          layout: $(go.TreeLayout, // specify a Diagram.layout that arranges trees
                    { angle: 90, layerSpacing: 35 })
        });
    
    // the template we defined earlier
    myDiagram.nodeTemplate =
      $(go.Node, "Horizontal",
        { background: "#44CCFF" },
        $(go.Picture,
          { margin: 10, width: 50, height: 50, background: "red" },
          new go.Binding("source")),
        $(go.TextBlock, "Default Text",
          { margin: 12, stroke: "white", font: "bold 16px sans-serif" },
          new go.Binding("text", "name"))
      );
    
    // define a Link template that routes orthogonally, with no arrowhead
    myDiagram.linkTemplate =
      $(go.Link,
        { routing: go.Link.Orthogonal, corner: 5 },
        $(go.Shape, { strokeWidth: 3, stroke: "#555" })); // the link shape
    
    var model = $(go.TreeModel);
    model.nodeDataArray =
    [
      { key: "1",              name: "Mrs Weslianne N",   source: "http://localhost:4200/assets/images/shane.jpg" },
      { key: "2", parent: "1", name: "Miss J",    source: "http://localhost:4200/assets/images/shane.jpg" },
      { key: "3", parent: "1", name: "Miss JB",   source: "http://localhost:4200/assets/images/shane.jpg" },
      { key: "4", parent: "3", name: "Mr Alois ", source: "http://localhost:4200/assets/images/shane.jpg" },
      { key: "5", parent: "3", name: "Mr Sam",     source: "http://localhost:4200/assets/images/shane.jpg" },
      { key: "6", parent: "2", name: "Mr Karbam", source: "http://localhost:4200/assets/images/shane.jpg" }
    ];
    myDiagram.model = model;
  }    

}