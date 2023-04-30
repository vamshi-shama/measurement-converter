function convert(){
    const inputValue = document.getElementById('input-value').value;
    const inputUnit = document.getElementById('input-unit').value;
    const outputUnit = document.getElementById('output-unit').value;

    let outputValue;

    switch (inputUnit) {
        case 'km':
			switch (outputUnit) {
				case 'm':
					outputValue = inputValue * 1000;
					break;
				case 'cm':
					outputValue = inputValue * 100000;
					break;
				case 'ft':
					outputValue = inputValue * 3280.84;
					break;
				case 'in':
					outputValue = inputValue * 39370.1;
					break;
				case 'mi':
					outputValue = inputValue * 0.621371;
					break;
				default:
					outputValue = inputValue;
			}
			break;

		case 'ft':
			switch (outputUnit) {
				case 'm':
					outputValue = inputValue * 0.3048;
					break;
				case 'cm':
					outputValue = inputValue * 30.48;
					break;
				case 'km':
					outputValue = inputValue * 0.0003048;
					break;
				case 'in':
					outputValue = inputValue * 12;
					break;
				case 'mi':
					outputValue = inputValue * 0.000189394;
					break;
				default:
					outputValue = inputValue;
			}
			break;

		case 'in':
			switch (outputUnit) {
				case 'm':
					outputValue = inputValue * 0.0254;
					break;
				case 'cm':
					outputValue = inputValue * 2.54;
					break;
				case 'km':
					outputValue = inputValue * 0.0000254;
					break;
				case 'ft':
					outputValue = inputValue * 0.0833333;
					break;
				case 'mi':
					outputValue = inputValue * 0.0000157828;
					break;
				default:
					outputValue = inputValue;
			}
			break;

		case 'mi':
			switch (outputUnit) {
				case 'm':
					outputValue = inputValue * 1609.34;
					break;
				case 'cm':
					outputValue = inputValue * 160934;
					break;
				case 'km':
					outputValue = inputValue * 1.60934;
					break;
				case 'ft':
					outputValue = inputValue * 5280;
					break;
				case 'in':
					outputValue = inputValue * 63360;
					break;
				default:
					outputValue = inputValue;
			}
			break;

		default:
			outputValue = inputValue;
	}

	document.getElementById('output-value').value = outputValue;
}

