import Icon from 'react-native-vector-icons/Ionicons';


export interface HeaderProps {
    icon : string;
    iconSize : number;
    text : string;
    subIcon : string;
    subIconSize : number;
    subIconAction : () => void;
}