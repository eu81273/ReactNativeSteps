import React, {
	AppRegistry,
	Component,
	StyleSheet,
	Text,
	View,
	TouchableHighlight,
} from 'react-native';

export default class ReactNativeSteps extends Component {
	constructor (props) {
		super(props);

		this.state = {
			message: '여기에 GPS 정보 표시'
		};
	}

	render() {
		return (
			<View style={styles.container}>
				<View>
					<Text>{this.state.message}</Text>
				</View>
				<TouchableHighlight
					onPressIn={this._onPressIn.bind(this)}
				>
					<Text style={styles.button}>
						GPS 정보 가져오기
					</Text>
				</TouchableHighlight>
			</View>
		);
	}

	componentWillUnmount () {
		if (this.watchID) {
			navigator.geolocation.clearWatch(this.watchID);
		}
	}

	_onPressIn () {
		//GPS값 변경 추적
		this.watchID = this.watchID || navigator.geolocation.watchPosition((position) => this.setState({message: JSON.stringify(position)}));

/*
		//한번만 GPS값 가져오기
		navigator.geolocation.getCurrentPosition((position) => {
				this.setState({
					message: JSON.stringify(position)
				});
				alert('잘 가져왔음')
			}, (error) => {
				alert(error.message)
			}, {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000});
*/
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF',
	},
	button: {
		fontSize: 30,
		textAlign: 'center',
		margin: 10,
		padding: 10,
		color: '#336699',
	},
});
