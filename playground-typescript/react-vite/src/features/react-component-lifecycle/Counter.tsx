import { Button, Flex, Text } from "@chakra-ui/react";
import { PureComponent } from "react";

import { log } from "@/utils";

interface Props {
  hasRender: boolean;
  seed: number;
}

interface State {
  counter: number;
  seed?: number;
}

export class Counter extends PureComponent<Props> {
  state: {
    counter: number;
    seed?: number;
  };
  increase: () => void;
  decrease: () => void;

  constructor(props: Props) {
    super(props);

    this.state = {
      counter: 0,
      seed: 0,
    };

    this.increase = () => this.setState({ counter: this.state.counter + 1 });
    this.decrease = () => this.setState({ counter: this.state.counter - 1 });

    log({ name: "Counter ~ constructor" });
    log({ type: "divider" });
  }

  static getDerivedStateFromProps(props: Props, state: State) {
    log({
      name: "Counter ~ getDerivedStateFromProps",
      value: { props, state },
    });
    log({ type: "divider" });

    if (props.seed && props.seed !== state.seed) {
      return {
        counter: props.seed,
        seed: props.seed,
      };
    }

    return null;
  }

  componentDidMount(): void {
    log({ name: "Counter ~ componentDidMount" });
    log({ type: "divider" });
  }

  shouldComponentUpdate(nextProps: Readonly<Props>) {
    log({
      name: "Counter ~ shouldComponentUpdate",
      value: { currentProps: this.props },
    });
    log({ name: "Counter ~ shouldComponentUpdate", value: { nextProps } });
    log({ type: "divider" });

    if (!nextProps.hasRender) {
      log({ name: "Counter ~ shouldComponentUpdate - DO NOT RENDER" });
      log({ type: "divider" });
      return false;
    }

    return true;
  }

  render() {
    log({ name: "Counter ~ render", value: this.state });
    log({ type: "divider" });

    return (
      <>
        <Text fontSize="xl" fontWeight={500} mt="5px">
          Counter App
        </Text>
        <Text>Counter: {this.state.counter}</Text>

        <Flex gap={5}>
          <Button onClick={this.decrease}>Decrease</Button>
          <Button onClick={this.increase}>Increase</Button>
        </Flex>
      </>
    );
  }

  getSnapshotBeforeUpdate(prevProps: Readonly<Props>, prevState: Readonly<{}>) {
    log({
      name: "Counter ~ getSnapshotBeforeUpdate",
      value: { prevProps, prevState },
    });
  }

  componentDidUpdate(
    prevProps: Readonly<Props>,
    prevState: Readonly<State>,
    snapshot?: any
  ) {
    log({
      name: "Counter ~ componentDidUpdate",
      value: { prevProps, prevState, snapshot, currentState: this.state },
    });
    log({ type: "divider" });
  }

  componentWillUnmount(): void {
    log({ name: "Counter ~ componentWillUnmount", value: this.state });
    log({ type: "divider" });
  }
}
