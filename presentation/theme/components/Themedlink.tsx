import { Link, type LinkProps } from 'expo-router';
import { useThemeColor } from '../hooks/use-theme-color';

const ThemedLink = ({ style, ...rest }: LinkProps) => {

  const primaryColor = useThemeColor({}, 'primary');

  return (
    <Link
      {...rest}
      style={[
        {
          color: primaryColor
        },
        style
      ]}
    >
    </Link>
  );
}

export default ThemedLink
