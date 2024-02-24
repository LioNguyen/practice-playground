import { Button, Stack, Text } from "@chakra-ui/react";
import { PureComponent } from "react";

import { log } from "@/utils";
import { Counter } from "./Counter";

export class ReactComponentLifeCycle extends PureComponent {
  state: {
    hasRender: boolean;
    seed: number;
  };
  generateSeed: () => void;
  toggleRender: () => void;

  constructor(props: any) {
    super(props);

    this.state = {
      hasRender: true,
      seed: 40,
    };

    this.toggleRender = () =>
      this.setState({ hasRender: !this.state.hasRender });
    this.generateSeed = () => this.setState({ seed: Math.random() * 10 });

    log({ name: "ReactComponentLifeCycle ~ constructor" });
    log({ type: "divider" });
  }

  componentDidMount(): void {
    log({ name: "ReactComponentLifeCycle ~ componentDidMount" });
    log({ type: "divider" });
  }

  render() {
    log({ name: "ReactComponentLifeCycle ~ render", value: this.state });
    log({ type: "divider" });

    return (
      <Stack>
        <Text variant="heading-2">React Component Lifecycle</Text>

        <Button onClick={this.toggleRender} p="5px 10px" width="fit-content">
          Toggle Render Counter
        </Button>
        <Button onClick={this.generateSeed} p="5px 10px" width="fit-content">
          Generate Seed
        </Button>
        <Counter hasRender={this.state.hasRender} seed={this.state.seed} />
      </Stack>
    );
  }

  componentDidUpdate(
    // prevProps: Readonly<{}>,
    prevStates: Readonly<{}>
  ) {
    log({
      name: "ReactComponentLifeCycle ~ componentDidUpdate",
      value: { prevStates },
    });
    log({
      name: "ReactComponentLifeCycle ~ componentDidUpdate",
      value: { currentStates: this.state },
    });
    log({ type: "divider" });
  }

  componentWillUnmount() {
    log({
      name: "ReactComponentLifeCycle ~ componentWillUnmount",
      value: this.state,
    });
    log({ type: "divider" });
  }
}
