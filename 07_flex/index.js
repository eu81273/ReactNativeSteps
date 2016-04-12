import React, {
	AppRegistry,
	Component,
	StyleSheet,
	Text,
	View,
} from 'react-native';

export default class ReactNativeSteps extends Component {
	constructor (props) {
		super(props);
	}

	render() {
		return (
			<View style={styles.parent}>
				<View style={styles.top}>
					<View style={styles.topLeft}>
						<Text style={styles.topLeftFirst}> 1 </Text>
						<Text style={styles.topLeftSecond}> 2 </Text>
					</View>
					<View style={styles.topRight}><Text>3</Text></View>
				</View>
				<View style={styles.bottom}>
					<View style={styles.bottomLeftSide}><Text>4</Text></View>
					<View style={styles.bottomCenter}><Text>5</Text></View>
					<View style={styles.bottomRightSide}>
						<View style={styles.bottomRightSideFirst}>
							<Text>6</Text>
						</View>
						<View style={styles.bottomRightSideSecond}>
							<Text>7</Text>
						</View>
					</View>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	parent: {
		flexDirection: 'column',
		position: 'absolute',
		top: 0,
		left: 0,
		right: 0,
		bottom: 0
	},
	top: {
		flex: 2,
		flexDirection: 'row',
	},
		topLeft: {
			flex: 1,
			flexDirection: 'column',
		},
			topLeftFirst: {
				flex: 1,
				borderColor: '#000000',
				borderWidth: 5,
			},
			topLeftSecond: {
				flex: 3,
				borderColor: '#000000',
				borderWidth: 5,
			},
		topRight: {
			flex: 3,
			backgroundColor: '#FF0000',
			borderColor: '#000000',
			borderWidth: 5,
		},
	bottom: {
		flex: 1,
		flexDirection: 'row',
	},
		bottomLeftSide: {
			flex: 1,
			backgroundColor: '#0000FF',
			borderColor: '#000000',
			borderWidth: 5,
		},
		bottomCenter: {
			flex: 2,
		},
		bottomRightSide: {
			flex: 1,
			flexDirection: 'column',
		},
			bottomRightSideFirst: {
				flex: 1,
				flexDirection: 'column',
				borderColor: '#000000',
				borderWidth: 5,
			},
			bottomRightSideSecond: {
				flex: 1,
				flexDirection: 'column',
				backgroundColor: '#00FF00',
				borderColor: '#000000',
				borderWidth: 5,
			},

});

/*
flexDirection : 자식 요소를 쌓을 방향
	row : 기본값으로, 행으로 수평방향으로 왼쪽에서 오른쪽으로 정렬한다.
	column : 열로 수직방향으로 위에서 아래로 정렬한다.

alignItems : 자식 요소를 쌓기 시작하는 위치
	flex-start
	flex-end
	center
*/
