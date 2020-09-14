import React from 'react';

import { Grid, GridColumn as Column, GridDetailRow } from '@progress/kendo-react-grid';


import products from './data.json';

class DetailComponent extends GridDetailRow {
    render() {
        const dataItem = this.props.dataItem;
        return (

<table>
  <tr>
    <th>No</th>
    <th>SNMP OID ADI</th>
    <th>OID</th>
	<th>DEĞER</th>
	<th>SON VERİ TARİHİ</th>
	<th>DURUM</th>
  </tr>
  <tr>
    <td>{dataItem.Category.CategoryID}</td>
    <td>{dataItem.Category.CategoryName}</td>
    <td>{dataItem.Category.CategoryOid}</td>
	<td>{dataItem.Category.CategoryValue}</td>
	<td>{dataItem.Category.CategoryDate}</td>
	<td>{dataItem.Category.CategoryStatus}</td>
  </tr>
  
</table>




        );
    }
}


export default class Tables extends React.Component {
    state = {
        data: products.slice(0),skip: 0, take: 10
    }

    expandChange = (event) => {
        event.dataItem.expanded = !event.dataItem.expanded;
        this.forceUpdate();
    }
	

    pageChange = (event) => {
        this.setState({
            skip: event.page.skip,
            take: event.page.take
        });
    }
    render() {
        return (
            <Grid
			data={products.slice(this.state.skip, this.state.take + this.state.skip)}
			skip={this.state.skip}
			take={this.state.take}
			total={products.length}
			pageable={true}
			onPageChange={this.pageChange}
               
                detail={DetailComponent}
			
				
                expandField="expanded"
                onExpandChange={this.expandChange}
            >
				<Column field="ID" title="Cihaz Id" width="150px" />
                <Column field="Device_name" title="Cihaz No" width="200px" />
                <Column field="Device_ip" title="Cihaz Ip" width="200px" />
                <Column field="Device_port" title="Cihaz Port" width="200px" />
				<Column field="Device_date" title="Tarih" width="200px"/>
                <Column field="Status" title="Cihaz Durumu" width="200px"/>
				<Column field="buton" title="Grafik" width="150px"/>
            </Grid>
        );
    }
}


