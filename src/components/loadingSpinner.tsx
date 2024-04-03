import "@fortawesome/fontawesome-svg-core/styles.css";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from "@fortawesome/react-fontawesome";

export default function LoadingSpinner(props: Partial<FontAwesomeIconProps>) {
  return <FontAwesomeIcon icon={faSpinner} spin {...props} />;
}
