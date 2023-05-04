import { Button, Icon } from "@chakra-ui/react";
import { Colors, getAlphaHex } from "../constants/theme";

type FooterButtonProps = {
  onClick?: () => void;
  enabled?: boolean;
};

export function FooterButton({ onClick, enabled }: FooterButtonProps) {
  return (
    <Button
      w="0"
      display="flex"
      flexGrow="1"
      justifyContent="center"
      alignContent="center"
      bgColor={enabled ? getAlphaHex(Colors.orange[300], 90) : "white"}
      onClick={onClick}
      rounded="none"
      _hover={{}}
      _active={{}}
    >
      <Icon color={enabled ? "white" : "black"} />
    </Button>
  );
}
