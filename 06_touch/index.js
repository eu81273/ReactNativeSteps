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
			pressed: false
		};
	}

	render() {
		return (
			<View style={styles.container}>
				<TouchableHighlight
					onPressIn={this._onPressIn.bind(this)}
					onPressOut={this._onPressOut.bind(this)}
					style={styles.touchable}
				>
					<Text style={this.state.pressed ? styles.active : styles.inactive}>
						터치 이벤트
					</Text>
				</TouchableHighlight>
			</View>
		);
	}

	_onPressIn () {
		this.setState({
			pressed: true
		});
	}

	_onPressOut () {
		this.setState({
			pressed: false
		});
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF',
	},
	active: {
		fontSize: 30,
		textAlign: 'center',
		margin: 10,
		padding: 10,
		color: '#336699',
	},
	inactive: {
		fontSize: 20,
		textAlign: 'center',
		margin: 10,
		padding: 10,
		color: '#663399',
	},
});
