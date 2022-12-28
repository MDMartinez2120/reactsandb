import React from "react";
//NOT RELIABLE WITHOUT A SUBSCRIPTION\\
import '@grapecity/wijmo.styles/wijmo.css';
import * as wijmo from '@grapecity/wijmo';
import * as wjInput from '@grapecity/wijmo.react.input';
import { getData } from '../../data';

class TestInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: getData()
        };
    }

    render() {
        return <div className="form-group">
            <label htmlFor="theComboTable">Table-Style:</label>
            <wjInput.ComboBox headerPath="country" displayMemberPath="country" itemsSource={this.state.data} wjItemTemplate={(context) => (<table>
                <tr>
                    <td>{context.item.country}</td>
                    <td className="number" title="GDP (million US$/year)">
                        {wijmo.format('{gdpm:c0}', context.item)}
                    </td>
                    <td className="number" title="Population (thousands)">
                        {wijmo.format('{popk:n0}', context.item)}
                    </td>
                    <td className="number" title="GDP/cap (US$/person/year)">
                        {wijmo.format('{gdpcap:c0}', context.item)}
                    </td>
                </tr>
            </table>)}>
            </wjInput.ComboBox>
        </div>
    }
};

export default TestInput;