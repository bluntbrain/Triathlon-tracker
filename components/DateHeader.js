import React from 'react';
import { Text } from 'react-native'

import { purple, black } from '../utils/colors';

export default function DateHeader({ date }) {
	return (
		<Text style={{fontSize: 25, color: black, marginTop:30}}>
			{date}
		</Text>
	)
}