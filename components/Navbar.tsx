import {
	Box,
	Flex,
	Text,
	IconButton,
	Stack,
	Collapse,
	Icon,
	Link,
	Popover,
	PopoverTrigger,
	useColorModeValue,
	useBreakpointValue,
	useDisclosure,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, ChevronDownIcon } from "@chakra-ui/icons";
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Navbar() {
	const { isOpen, onToggle } = useDisclosure();

	return (
		<Box as='header' position='fixed' w='100%'>
			<Flex
				bg={useColorModeValue("white", "gray.800")}
				color={useColorModeValue("gray.600", "white")}
				minH={"60px"}
				py={{ base: 2 }}
				px={{ base: 4 }}
				borderBottom={1}
				borderStyle={"solid"}
				borderColor={useColorModeValue("gray.200", "gray.900")}
				align={"center"}
				flexDirection={"row-reverse"}
				justifyContent={"space-between"}
			>
				<Flex
					flex={{ md: "auto" }}
					ml={{ base: -2 }}
					justifyContent={"end"}
					display={{ base: "flex", md: "none" }}
                    aria-label='Menu'
				>
					<IconButton
						onClick={onToggle}
						icon={isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />}
						variant={"ghost"}
						aria-label={"Toggle Navigation"}
					/>
				</Flex>

				<Flex
					padding={2}
					justify={{ base: "center", md: "start" }}
					justifyContent={"end"}
					minWidth={{ md: 137 }}
                    aria-label='Redes Sociales'
				>
					<IconButton
						onClick={onToggle}
						icon={<FaFacebook />}
						variant={"ghost"}
						aria-label={"Twitter Navigation"}
					/>
					<IconButton
						onClick={onToggle}
						icon={<FaInstagram />}
						variant={"ghost"}
						aria-label={"Twitter Navigation"}
					/>
					<IconButton
						onClick={onToggle}
						icon={<FaLinkedin />}
						variant={"ghost"}
						aria-label={"Twitter Navigation"}
					/>
				</Flex>

				<Flex display={{ base: "none", md: "flex" }}>
					<DesktopNav />
				</Flex>

				<Flex justify={{ base: "center", md: "start" }} minWidth={{ md: 137 }}>
					<Text
						as='span'
                        aria-label='Logo'
						textAlign={useBreakpointValue({ base: "center", md: "left" })}
						fontFamily={"heading"}
						color={useColorModeValue("gray.800", "white")}
					>
						Logo
					</Text>
				</Flex>
			</Flex>

			<Collapse in={isOpen} animateOpacity>
				<MobileNav />
			</Collapse>
		</Box>
	);
}

const DesktopNav = () => {
	const linkColor = useColorModeValue("gray.600", "gray.200");
	const linkHoverColor = useColorModeValue("gray.800", "white");
	const popoverContentBgColor = useColorModeValue("white", "gray.800");

	return (
		<Stack direction={"row"} spacing={4}>
			{NAV_ITEMS.map((navItem) => (
				<Box key={navItem.label}>
					<Popover trigger={"hover"} placement={"bottom-start"}>
						<PopoverTrigger>
							<Link
								p={2}
								href={navItem.href ?? "#"}
								fontSize={"sm"}
								fontWeight={500}
								color={linkColor}
								_hover={{
									textDecoration: "none",
									color: linkHoverColor,
								}}
							>
								{navItem.label}
							</Link>
						</PopoverTrigger>
					</Popover>
				</Box>
			))}
		</Stack>
	);
};

const MobileNav = () => {
	return (
		<Stack bg={useColorModeValue("white", "gray.800")} p={4} display={{ md: "none" }}>
			{NAV_ITEMS.map((navItem) => (
				<MobileNavItem key={navItem.label} {...navItem} />
			))}
		</Stack>
	);
};

const MobileNavItem = ({ label, children, href }: NavItem) => {
	const { isOpen, onToggle } = useDisclosure();

	return (
		<Stack spacing={4} onClick={children && onToggle}>
			<Flex
				py={2}
				as={Link}
				href={href ?? "#"}
				justify={"space-between"}
				align={"center"}
				_hover={{
					textDecoration: "none",
				}}
			>
				<Text fontWeight={600} color={useColorModeValue("gray.600", "gray.200")}>
					{label}
				</Text>
				{children && (
					<Icon
						as={ChevronDownIcon}
						transition={"all .25s ease-in-out"}
						transform={isOpen ? "rotate(180deg)" : ""}
						w={6}
						h={6}
					/>
				)}
			</Flex>
		</Stack>
	);
};

interface NavItem {
	label: string;
	subLabel?: string;
	children?: Array<NavItem>;
	href?: string;
}

const NAV_ITEMS: Array<NavItem> = [
	{
		label: "Sobre nosotros",
		href: "#features",
	},
	{
		label: "Inscribete",
		href: "#",
	},
];
