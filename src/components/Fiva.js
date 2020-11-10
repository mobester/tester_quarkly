import React from "react";
import { useOverrides, Override, StackItem, Stack, Formspree } from "@quarkly/components";
import { Text, Input, Button } from "@quarkly/widgets";
const defaultProps = {};
const overrides = {
	"stack": {
		"kind": "Stack",
		"props": {
			"gap": "16px"
		}
	},
	"stackItem": {
		"kind": "StackItem",
		"props": {
			"width": "50%"
		}
	},
	"stackItemOverride": {
		"kind": "Override",
		"props": {
			"slot": "StackItemContent",
			"flex-direction": "column"
		}
	},
	"text": {
		"kind": "Text",
		"props": {
			"font": "--base",
			"margin": "0 0 4px 0",
			"children": "Name"
		}
	},
	"input": {
		"kind": "Input",
		"props": {
			"max-width": "400px",
			"width": "100%",
			"name": "name"
		}
	},
	"stackItem1": {
		"kind": "StackItem",
		"props": {
			"width": "50%"
		}
	},
	"stackItemOverride1": {
		"kind": "Override",
		"props": {
			"slot": "StackItemContent",
			"flex-direction": "column"
		}
	},
	"text1": {
		"kind": "Text",
		"props": {
			"font": "--base",
			"margin": "0 0 4px 0",
			"children": "Email"
		}
	},
	"input1": {
		"kind": "Input",
		"props": {
			"max-width": "400px",
			"width": "100%",
			"type": "email",
			"name": "email"
		}
	},
	"stackItem2": {
		"kind": "StackItem",
		"props": {
			"width": "100%"
		}
	},
	"stackItemOverride2": {
		"kind": "Override",
		"props": {
			"slot": "StackItemContent",
			"flex-direction": "column"
		}
	},
	"text2": {
		"kind": "Text",
		"props": {
			"font": "--base",
			"margin": "0 0 4px 0",
			"children": "Message"
		}
	},
	"input2": {
		"kind": "Input",
		"props": {
			"as": "textarea",
			"rows": "4",
			"width": "100%",
			"name": "message"
		}
	},
	"stackItem3": {
		"kind": "StackItem",
		"props": {
			"width": "100%"
		}
	},
	"button": {
		"kind": "Button",
		"props": {
			"children": "Send"
		}
	}
};

const Fiva = props => {
	const {
		override,
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Formspree {...rest}>
		<Stack {...override("stack")}>
			<StackItem {...override("stackItem")}>
				<Override {...override("stackItemOverride")} />
				<Text {...override("text")} />
				<Input {...override("input")} />
			</StackItem>
			<StackItem {...override("stackItem1")}>
				<Override {...override("stackItemOverride1")} />
				<Text {...override("text1")} />
				<Input {...override("input1")} />
			</StackItem>
			<StackItem {...override("stackItem2")}>
				<Override {...override("stackItemOverride2")} />
				<Text {...override("text2")} />
				<Input {...override("input2")} />
			</StackItem>
			<StackItem {...override("stackItem3")}>
				<Button {...override("button")} />
			</StackItem>
		</Stack>
		{children}
	</Formspree>;
};

Object.assign(Fiva, { ...Formspree,
	defaultProps,
	overrides
});
export default Fiva;