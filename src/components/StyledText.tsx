import React from 'react'
import { Text } from 'react-native'
import { styledColor, styledFontSize, styledFontWeight, styledFallback, styledTextJustified } from '../config/theme/appTheme'
import { StyledTextProps } from '../interface/StyledTextProps';

export const StyledText: React.FC<StyledTextProps> = (props) => {
  const textStyle: any = [
    { ...styledFallback.text },
    props.bgBlack && styledColor.bgBlack,
    props.bgWhite && styledColor.bgWhite,
    props.blue20 && styledColor.blue20,
    props.blue40 && styledColor.blue40,
    props.blue60 && styledColor.blue60,
    props.blue80 && styledColor.blue80,
    props.blue100 && styledColor.blue100,
    props.textGray && styledColor.textGray,
    props.textWhite && styledColor.textWhite,
    props.bold && styledFontWeight.bold,
    props.regular && styledFontWeight.regular,
    props.text2XL && styledFontSize.text2XL,
    props.text3XL && styledFontSize.text3XL,
    props.text4XL && styledFontSize.text4XL,
    props.textG && styledFontSize.textG,
    props.textH && styledFontSize.textH,
    props.textL && styledFontSize.textL,
    props.textM && styledFontSize.textM,
    props.textMA && styledFontSize.textMA,
    props.textML && styledFontSize.textML,
    props.textS && styledFontSize.textS,
    props.textSM && styledFontSize.textSM,
    props.textXL && styledFontSize.textXL,
    props.textXLL && styledFontSize.textXLL,
    props.textXLM && styledFontSize.textXLM,
    props.textCenter && styledTextJustified.textCenter,
    props.textJustify && styledTextJustified.textJustify,
    props.textLeft && styledTextJustified.textLeft,
    props.textRight && styledTextJustified.textRight,
  ];

  return (
    <Text style={textStyle}>{props.children}</Text>
  )
}
