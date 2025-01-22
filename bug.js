```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // This effect runs only once on mount.
    console.log('Mounted!'); // This log appears only once
  }, []);

  useEffect(() => {
    // This effect runs every time count changes.
    console.log('Count changed:', count); // This log appears every time count changes
  }, [count]);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
```