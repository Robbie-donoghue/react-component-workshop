function MyComponent(props) {
  return (
    <div>
      Hello, {props.firstName} {props.lastName}!
    </div>
  );
}
<MyComponent firstName="Robbie" lastName="Donoghue"></MyComponent>;
