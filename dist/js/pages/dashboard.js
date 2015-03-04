/*
 * Author: Abdullah A Almsaeed
 * Date: 4 Jan 2014
 * Description:
 *      This is a demo file used only for the main dashboard (index.html)
 **/
"use strict";

$(function () {

  //Activate the iCheck Plugin
  $('input[type="checkbox"]').iCheck({
    checkboxClass: 'icheckbox_flat-blue',
    radioClass: 'iradio_flat-blue'
  });
  //Make the dashboard widgets sortable Using jquery UI
  $(".connectedSortable").sortable({
    placeholder: "sort-highlight",
    connectWith: ".connectedSortable",
    handle: ".box-header, .nav-tabs",
    forcePlaceholderSize: true,
    zIndex: 999999
  });
  $(".connectedSortable .box-header, .connectedSortable .nav-tabs-custom").css("cursor", "move");
  //jQuery UI sortable for the todo list
  $(".todo-list").sortable({
    placeholder: "sort-highlight",
    handle: ".handle",
    forcePlaceholderSize: true,
    zIndex: 999999
  });

  //bootstrap WYSIHTML5 - text editor
  $(".textarea").wysihtml5();

  $('.daterange').daterangepicker(
          {
            ranges: {
              'Today': [moment(), moment()],
              'Yesterday': [moment().subtract('days', 1), moment().subtract('days', 1)],
              'Last 7 Days': [moment().subtract('days', 6), moment()],
              'Last 30 Days': [moment().subtract('days', 29), moment()],
              'This Month': [moment().startOf('month'), moment().endOf('month')],
              'Last Month': [moment().subtract('month', 1).startOf('month'), moment().subtract('month', 1).endOf('month')]
            },
            startDate: moment().subtract('days', 29),
            endDate: moment()
          },
  function (start, end) {
    alert("You chose: " + start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY'));
  });

  /* jQueryKnob */
  $(".knob").knob();

  //jvectormap data
  var visitorsData = {
    "US": 398, //USA
    "SA": 400, //Saudi Arabia
    "CA": 1000, //Canada
    "DE": 500, //Germany
    "FR": 760, //France
    "CN": 300, //China
    "AU": 700, //Australia
    "BR": 600, //Brazil
    "IN": 800, //India
    "GB": 320, //Great Britain
    "RU": 3000 //Russia
  };
  //World map by jvectormap
  $('#world-map').vectorMap({
    map: 'world_mill_en',
    backgroundColor: "transparent",
    regionStyle: {
      initial: {
        fill: '#e4e4e4',
        "fill-opacity": 1,
        stroke: 'none',
        "stroke-width": 0,
        "stroke-opacity": 1
      }
    },
    series: {
      regions: [{
          values: visitorsData,
          scale: ["#92c1dc", "#ebf4f9"],
          normalizeFunction: 'polynomial'
        }]
    },
    onRegionLabelShow: function (e, el, code) {
      if (typeof visitorsData[code] != "undefined")
        el.html(el.html() + ': ' + visitorsData[code] + ' new visitors');
    }
  });

  //Sparkline charts
  var myvalues = [1000, 1200, 920, 927, 931, 1027, 819, 930, 1021];
  $('#sparkline-1').sparkline(myvalues, {
    type: 'line',
    lineColor: '#92c1dc',
    fillColor: "#ebf4f9",
    height: '50',
    width: '80'
  });
  myvalues = [515, 519, 520, 522, 652, 810, 370, 627, 319, 630, 921];
  $('#sparkline-2').sparkline(myvalues, {
    type: 'line',
    lineColor: '#92c1dc',
    fillColor: "#ebf4f9",
    height: '50',
    width: '80'
  });
  myvalues = [15, 19, 20, 22, 33, 27, 31, 27, 19, 30, 21];
  $('#sparkline-3').sparkline(myvalues, {
    type: 'line',
    lineColor: '#92c1dc',
    fillColor: "#ebf4f9",
    height: '50',
    width: '80'
  });

  //The Calender
  $("#calendar").datepicker();

  //SLIMSCROLL FOR CHAT WIDGET
  $('#chat-box').slimScroll({
    height: '250px'
  });

  // /* Morris.js Charts */
  // // Sales chart
  // var area = new Morris.Area({
  //   element: 'revenue-chart',
  //   resize: true,
  //   data: [
  //     {y: '2011 Q1', item1: 2666, item2: 2666},
  //     {y: '2011 Q2', item1: 2778, item2: 2294},
  //     {y: '2011 Q3', item1: 4912, item2: 1969},
  //     {y: '2011 Q4', item1: 3767, item2: 3597},
  //     {y: '2012 Q1', item1: 6810, item2: 1914},
  //     {y: '2012 Q2', item1: 5670, item2: 4293},
  //     {y: '2012 Q3', item1: 4820, item2: 3795},
  //     {y: '2012 Q4', item1: 15073, item2: 5967},
  //     {y: '2013 Q1', item1: 10687, item2: 4460},
  //     {y: '2013 Q2', item1: 8432, item2: 5713}
  //   ],
  //   xkey: 'y',
  //   ykeys: ['item1', 'item2'],
  //   labels: ['Item 1', 'Item 2'],
  //   lineColors: ['#a0d0e0', '#3c8dbc'],
  //   hideHover: 'auto'
  // });
  // var line = new Morris.Line({
  //   element: 'line-chart',
  //   resize: true,
  //   data: [
  //     {y: '2011 Q1', item1: 2666},
  //     {y: '2011 Q2', item1: 2778},
  //     {y: '2011 Q3', item1: 4912},
  //     {y: '2011 Q4', item1: 3767},
  //     {y: '2012 Q1', item1: 6810},
  //     {y: '2012 Q2', item1: 5670},
  //     {y: '2012 Q3', item1: 4820},
  //     {y: '2012 Q4', item1: 15073},
  //     {y: '2013 Q1', item1: 10687},
  //     {y: '2013 Q2', item1: 8432}
  //   ],
  //   xkey: 'y',
  //   ykeys: ['item1'],
  //   labels: ['Item 1'],
  //   lineColors: ['#efefef'],
  //   lineWidth: 2,
  //   hideHover: 'auto',
  //   gridTextColor: "#fff",
  //   gridStrokeWidth: 0.4,
  //   pointSize: 4,
  //   pointStrokeColors: ["#efefef"],
  //   gridLineColor: "#efefef",
  //   gridTextFamily: "Open Sans",
  //   gridTextSize: 10
  // });

  // //Donut Chart
  // var donut = new Morris.Donut({
  //   element: 'sales-chart',
  //   resize: true,
  //   colors: ["#3c8dbc", "#f56954", "#00a65a"],
  //   data: [
  //     {label: "Download Sales", value: 12},
  //     {label: "In-Store Sales", value: 30},
  //     {label: "Mail-Order Sales", value: 20}
  //   ],
  //   hideHover: 'auto'
  // });

  // //Fix for charts under tabs
  // $('.box ul.nav a').on('shown.bs.tab', function (e) {
  //   area.redraw();
  //   donut.redraw();
  // });


  // /* BOX REFRESH PLUGIN EXAMPLE (usage with morris charts) */
  // $("#loading-example").boxRefresh({
  //   source: "ajax/dashboard-boxrefresh-demo.php",
  //   onLoadDone: function (box) {
  //     bar = new Morris.Bar({
  //       element: 'bar-chart',
  //       resize: true,
  //       data: [
  //         {y: '2006', a: 100, b: 90},
  //         {y: '2007', a: 75, b: 65},
  //         {y: '2008', a: 50, b: 40},
  //         {y: '2009', a: 75, b: 65},
  //         {y: '2010', a: 50, b: 40},
  //         {y: '2011', a: 75, b: 65},
  //         {y: '2012', a: 100, b: 90}
  //       ],
  //       barColors: ['#00a65a', '#f56954'],
  //       xkey: 'y',
  //       ykeys: ['a', 'b'],
  //       labels: ['CPU', 'DISK'],
  //       hideHover: 'auto'
  //     });
  //   }
  // });

  // /* The todo list plugin */
  // $(".todo-list").todolist({
  //   onCheck: function (ele) {
  //     console.log("The element has been checked")
  //   },
  //   onUncheck: function (ele) {
  //     console.log("The element has been unchecked")
  //   }
  // });

});

//changjiasheng 2015-2-28
    var Dashboard = {

    //TODO:add row
    addRow: function(){
        var rand = Math.floor(Math.random() * 10 + 1);
        var data_target_id = 'myrow_'+rand;
        var data = ' <div class="row">'+
                      '<div class="box box-primary">'+
                       ' <div class="box-header" data-toggle="tooltip" title="" data-original-title="Header tooltip">'+
                        '  <h3 class="box-title">Row</h3>'+
                        '<small class="dropdown"> '+                      
                         '<a href="#" class="dropdown-toggle" data-toggle="dropdown" aria-expanded="false">Add Widget '+
                          '<span class="caret"></span></a>'+     
                           '<ul class="dropdown-menu" role="menu">'+     
                           '<li><a href="#" onclick="javascript:Dashboard.addText(this);" data-target_id="'+data_target_id+'">Text</a></li>'+     
                           '<li><a href="#">Another action</a></li>'+     
                           '<li><a href="#">Something else here</a></li>'+     
                          ' <li class="divider"></li>'+     
                         '  <li><a href="#">Separated link</a></li>'+     
                        '  </ul>'+     
                      ' </small>'+     
                         ' <div class="box-tools pull-right">'+
                          '  <button class="btn btn-primary btn-xs" data-widget="collapse"><i class="fa fa-minus"></i></button>'+
                           ' <button class="btn btn-primary btn-xs" data-widget="remove"><i class="fa fa-times"></i></button>'+
                          '</div>'+
                        '</div>'+
                        '<div class="box-body" style="overflow: hidden;" id="'+data_target_id+'">'+
                        '</div><!-- /.box-body -->'+
                      '</div>'+
                   ' </div><!-- /.row (main row) -->';

        window.parent.$('#mycontent').append(data);
        $.AdminLTE.boxWidget.activate();

        return false;
       
    },

    //TODO:add text
    addText: function(obj){
        var rand = Math.floor(Math.random() * 10 + 1);
// 
        // var data ='<section class="col-lg-4 connectedSortable ui-sortable">'+
        //       '<div class="box box-solid box-info">'+
        //         '<div class="box-header">'+
        //          ' <h3 class="box-title">Info Solid Box</h3>'+
        //           '<div class="box-tools pull-right">'+
        //            ' <button class="btn btn-info btn-sm" data-widget="collapse"><i class="fa fa-minus"></i></button>'+
        //             '<button class="btn btn-info btn-sm" data-widget="remove"><i class="fa fa-times"></i></button>'+
        //           '</div>'+
        //         '</div>'+
        //         '<div class="box-body" style="display: block;">'+
        //          ' Box class: <code>.box.box-solid.box-info</code>'+
        //           '<p>'+
        //            ' amber, microbrewery abbey hydrometer, brewpub ale lauter tun saccharification oxidized barrel.'+
        //             'berliner weisse wort chiller adjunct hydrometer alcohol aau!'+
        //             'sour/acidic sour/acidic chocolate malt ipa ipa hydrometer.'+
        //           '</p>'+
        //         '</div><!-- /.box-body -->'+
        //       '</div></section>';

         var data ='<section class="col-lg-4 connectedSortable ui-sortable">'+
              '<div class="box">'+
                '<div class="box-header">'+
                 ' <h3 class="box-title">Default Box (button tooltip)</h3>'+
                  '<div class="box-tools pull-right">'+
                   ' <button class="btn btn-box-tool" data-widget="collapse" data-toggle="tooltip" title="" data-original-title="Collapse"><i class="fa fa-minus"></i></button>'+
                    '<button class="btn btn-box-tool" data-widget="remove" data-toggle="tooltip" title="" data-original-title="Remove"><i class="fa fa-times"></i></button>'+
                  '</div>'+
                '</div>'+
                '<div class="box-body">'+
                 ' Box class: <code>.box</code>'+
                  '<p>'+
                   ' amber, microbrewery abbey hydrometer, brewpub ale lauter tun saccharification oxidized barrel.'+
                    'berliner weisse wort chiller adjunct hydrometer alcohol aau!'+
                    'sour/acidic sour/acidic chocolate malt ipa ipa hydrometer.'+
                  '</p>'+
                '</div><!-- /.box-body -->'+
                '<div class="box-footer">'+
                 ' <code>.box-footer</code>'+
                '</div><!-- /.box-footer-->'+
              '</div>'+
          ' </div><!-- /.row (main row) -->';
//         var data = '<div class="box box-default">'+
//   '<div class="box-header with-border">'+
//     '<h3 class="box-title">Tooltips on buttons</h3>'+
//     '<div class="box-tools pull-right">      '+
//       '<button class="btn btn-box-tool" data-widget="collapse" data-toggle="tooltip" title="Collapse"><i class="fa fa-minus"></i></button>'+
//       '<button class="btn btn-box-tool" data-widget="remove" data-toggle="tooltip" title="Remove"><i class="fa fa-times"></i></button>'+
//    ' </div><!-- /.box-tools -->'+
//  ' </div><!-- /.box-header -->'+
//   '<div class="box-body">'+
//   '  The body of the box'+
//   '</div><!-- /.box-body -->'+
// '</div><!-- /.box -->';
        var target_id = $(obj).data("target_id");
        window.parent.$('#'+target_id).append(data);
        

        // window.parent.Dashboard.savePreferences();
        // window.parent.Dashboard.addWidgetControls();
        window.parent.Dashboard.makeSortable();
        //TODO close and collapse active
        $.AdminLTE.boxWidget.activate();
        return false;
    },

    //TODO:makeSortable
    makeSortable : function(){
       $(".connectedSortable").sortable({
          placeholder: "sort-highlight",
          connectWith: ".connectedSortable",
          handle: ".box-header, .nav-tabs",
          forcePlaceholderSize: true,
          zIndex: 999999
        });
       $(".connectedSortable .box-header, .connectedSortable .nav-tabs-custom").css("cursor", "move");
       return false;
    }

   };