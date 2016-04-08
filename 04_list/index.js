import React, {
	AppRegistry,
	Component,
	StyleSheet,
	Text,
	View,
	ListView,
} from 'react-native';
import ListItem from './ListItem';

export default class ReactNativeSteps extends Component {
	constructor (props) {
		super(props);

		//초기 state 설정
		this.state = {
			dataSource: new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2}).cloneWithRows([])
		}
	}

	render() {
		return (
			<View style={styles.container}>
				<ListView
					dataSource={this.state.dataSource}
					renderHeader={this._renderHeader}
					renderRow={this._renderRow}
					renderFooter={this._renderFooter}
				/>
			</View>
		);
	}

	componentDidMount () {
		this._refreshData();
	}

	_refreshData () {
		let sampleAPI = 'http://www.bbc.co.uk/radio1/playlist.json';

		fetch(sampleAPI)
		.then(response => response.json())
		.then((responseJSON) => {
			this.setState({
				dataSource: this.state.dataSource.cloneWithRows(responseJSON.playlist.hottestrecord2013)
			});
		})
		.catch((e) => {
			console.log(e.message);
		});
	}

	_renderRow (rowData) {
		return (
			<ListItem
				rowData={rowData}
			/>
		);
	}

	_renderHeader () {
		return (
			<View>
				<Text>
					Hottest Record 2013
				</Text>
			</View>
		);
	}

	_renderFooter () {
		return (
			<View>
				<Text>
					End of List
				</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'stretch',
	},
});
