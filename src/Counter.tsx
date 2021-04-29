import React, { useState } from 'react';
import { VStack, HStack, Button } from '@chakra-ui/react';
import { AiFillMinusCircle, AiFillPlusCircle } from 'react-icons/ai';

function Counter() {
	const [count, setCount] = useState(0);

	return (
		<VStack>
			<h1 style={{ fontSize: '62px', marginBottom: '75px' }}>{count}</h1>
			<HStack>
				<Button
					colorScheme='blue'
					variant='outline'
					onClick={(evt) => {
						setCount(count + 1);
					}}
					leftIcon={<AiFillPlusCircle />}>
					Increment
				</Button>
				<Button
					colorScheme='red'
					onClick={(evt) => {
						setCount(count - 1);
					}}
					rightIcon={<AiFillMinusCircle />}>
					Decrement
				</Button>
			</HStack>
		</VStack>
	);
}

export default Counter;
