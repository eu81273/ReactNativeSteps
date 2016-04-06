import React, {
	AppRegistry,
	Component,
	StyleSheet,
	Text,
	View,
	TextInput
} from 'react-native';

export default class ReactNativeSteps extends Component {
	constructor (props) {
		super(props);

		//초기 state 설정
		this.state = {
			typedText: '아래에 텍스트를 입력하세요..'
		}
	}

	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.welcome}>
					텍스트 입력 예제
				</Text>
				<Text style={styles.instructions}>
					{this.state.typedText}
				</Text>
				<TextInput
					style={styles.input}
					onChangeText={this._textInputHandler}
				/>
			</View>
		);
	}

	_textInputHandler (text) {
		this.setState({typedText: text});
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
	input: {
		fontSize: 20,
		borderWidth: 2,
		height: 40
	},
});
