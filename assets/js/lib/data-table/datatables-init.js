(function ($) {
    //    "use strict";


    /*  Data Table
    -------------*/

 	// $('#bootstrap-data-table').DataTable();


   



    $('#bootstrap-data-table-export').DataTable({
        dom: 'lBfrtip',
      
        buttons: [
            'excel', 'pdf', 
        ]
    });
	
	$('#row-select').DataTable( {
			initComplete: function () {
				this.api().columns().every( function () {
					var column = this;
					var select = $('<select class="form-control"><option value=""></option></select>')
						.appendTo( $(column.footer()).empty() )
						.on( 'change', function () {
							var val = $.fn.dataTable.util.escapeRegex(
								$(this).val()
							);
	 
							
						} );
	 
					
				} );
			}
		} );






})(jQuery);