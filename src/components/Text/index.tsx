import React from 'react';
import StyledText from './StyledText';

export type TextProps = {
	text: string;
	color?: string;
	backgroundColor?: string;
	fontSize?: string;
	fontWeight?: string;
	fontStyle?: string;
	lineHeight?: string;
	truncate?: boolean;
	noUserSelect?: boolean;
	isDisabled?: boolean;
	isBold?: boolean;
	testId?: string;
};

const Text: React.FC<TextProps> = ({
	text,
	color,
	backgroundColor,
	fontSize,
	fontWeight,
	fontStyle,
	lineHeight,
	truncate,
	noUserSelect,
	isDisabled,
	isBold,
	testId,
}) => {
	return (
		<StyledText
			color={color}
			backgroundColor={backgroundColor}
			fontSize={fontSize}
			fontWeight={fontWeight}
			fontStyle={fontStyle}
			lineHeight={lineHeight}
			truncate={truncate}
			noUserSelect={noUserSelect}
			isDisabled={isDisabled}
			isBold={isBold}
			data-testid={testId}
		>
			{text}
		</StyledText>
	);
};

Text.defaultProps = {
	color: '',
	backgroundColor: '',
	fontSize: '',
	fontWeight: '',
	fontStyle: '',
	lineHeight: '',
	truncate: false,
	noUserSelect: false,
	isDisabled: false,
	isBold: false,
	testId: '',
};

export default React.memo(Text);
