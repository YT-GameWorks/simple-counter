import * as React from 'react';
import { ChakraProvider, Box, Grid, theme } from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import Counter from './Counter';

function App() {
	return (
		<ChakraProvider theme={theme}>
			<Box textAlign='center' fontSize='xl'>
				<Grid minH='100vh' p={3}>
					<ColorModeSwitcher justifySelf='flex-end' />
					<h1 style={{ fontSize: '72px' }}>Simple Counter</h1>
					<Counter />
				</Grid>
			</Box>
		</ChakraProvider>
	);
}

export default App;
