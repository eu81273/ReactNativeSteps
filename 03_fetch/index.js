import React, {
	AppRegistry,
	Component,
	StyleSheet,
	Text,
	View
} from 'react-native';

export default class ReactNativeSteps extends Component {
	constructor (props) {
		super(props);

		//초기 state 설정
		this.state = {
			text: '데이터를 가져오는 중..',
			detail: ''
		}
	}

	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.welcome}>
					JSON API Fetch 예제!
				</Text>
				<Text style={styles.instructions}>
					{this.state.text}
				</Text>
				<Text style={styles.instructions}>
					{this.state.detail}
				</Text>
			</View>
		);
	}

	_refreshData () {
		let sampleAPI = 'http://www.bbc.co.uk/radio1/playlist.json';

		fetch(sampleAPI)
		.then(response => response.json())
		.then((responseJSON) => {
			this.setState({
				text: `데이터를 가져오기 성공 ${responseJSON.playlist.a.length} 개`,
				detail: responseJSON.playlist.a[0].title
			});
		})
		.catch((e) => {
			this.setState({
				text: '데이터를 가져오는 중 오류 발생',
				detail: e.message
			});
		});
	}

	componentDidMount () {
		this._refreshData();
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF',
	},
	welcome: {
		fontSize: 20,
		textAlign: 'center',
		margin: 10,
	},
	instructions: {
		textAlign: 'center',
		color: '#333333',
		marginBottom: 5,
	},
});
