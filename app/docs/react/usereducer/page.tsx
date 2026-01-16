import { CodeBlock } from '@/components/code-block';

export default function UseReducerPage() {
  return (
    <div className='space-y-8'>
      <div className='space-y-4'>
        <h1 className='text-4xl font-bold text-blue-500'>useReducer Hook</h1>
        <p className='text-lg text-zinc-600 dark:text-zinc-400'>
          Manage complex state with actions and reducers for predictable state
          updates.
        </p>
      </div>

      <div className='space-y-6'>
        <section className='space-y-4'>
          <h2 className='text-2xl font-semibold text-zinc-900 dark:text-white'>
            What is useReducer?
          </h2>
          <p className='text-zinc-600 dark:text-zinc-400'>
            <code className='bg-zinc-200 dark:bg-zinc-800 px-2 py-1 rounded'>
              useReducer
            </code>{' '}
            is a React Hook that manages state via "actions" and a "reducer"
            function. It's perfect for complex state logic, shopping carts,
            forms with multiple fields, or any Redux-style state management
            needs.
          </p>
        </section>

        <section className='space-y-4'>
          <h2 className='text-2xl font-semibold text-zinc-900 dark:text-white'>
            Basic Syntax
          </h2>
          <CodeBlock>{`import { useReducer } from 'react';

const [state, dispatch] = useReducer(reducer, initialState);

// reducer: function that takes (state, action) => newState
// initialState: starting state value
// state: current state value
// dispatch: function to send actions to the reducer`}</CodeBlock>
        </section>

        <section className='space-y-4'>
          <h2 className='text-2xl font-semibold text-zinc-900 dark:text-white'>
            Simple Counter Example
          </h2>
          <CodeBlock>{`import { useReducer } from 'react';

// Reducer function
function counterReducer(state, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    case 'RESET':
      return { count: 0 };
    default:
      throw new Error(\`Unknown action: \${action.type}\`);
  }
}

function Counter() {
  const [state, dispatch] = useReducer(counterReducer, { count: 0 });
  
  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>+</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>-</button>
      <button onClick={() => dispatch({ type: 'RESET' })}>Reset</button>
    </div>
  );
}`}</CodeBlock>
        </section>

        <section className='space-y-4'>
          <h2 className='text-2xl font-semibold text-zinc-900 dark:text-white'>
            Shopping Cart Example
          </h2>
          <CodeBlock>{`function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD_ITEM':
      return {
        ...state,
        items: [...state.items, action.payload],
        total: state.total + action.payload.price
      };
      
    case 'REMOVE_ITEM':
      const itemToRemove = state.items.find(i => i.id === action.payload);
      return {
        ...state,
        items: state.items.filter(i => i.id !== action.payload),
        total: state.total - itemToRemove.price
      };
      
    case 'CLEAR_CART':
      return { items: [], total: 0 };
      
    default:
      return state;
  }
}

function ShoppingCart() {
  const [state, dispatch] = useReducer(cartReducer, {
    items: [],
    total: 0
  });
  
  const addItem = (item) => {
    dispatch({ type: 'ADD_ITEM', payload: item });
  };
  
  const removeItem = (id) => {
    dispatch({ type: 'REMOVE_ITEM', payload: id });
  };
  
  return (
    <div>
      <h2>Cart Total: \${state.total}</h2>
      <ul>
        {state.items.map(item => (
          <li key={item.id}>
            {item.name} - \${item.price}
            <button onClick={() => removeItem(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
      <button onClick={() => dispatch({ type: 'CLEAR_CART' })}>
        Clear Cart
      </button>
    </div>
  );
}`}</CodeBlock>
        </section>

        <section className='space-y-4'>
          <h2 className='text-2xl font-semibold text-zinc-900 dark:text-white'>
            Complex Form Example
          </h2>
          <CodeBlock>{`function formReducer(state, action) {
  switch (action.type) {
    case 'SET_FIELD':
      return {
        ...state,
        [action.field]: action.value
      };
      
    case 'SET_ERROR':
      return {
        ...state,
        errors: { ...state.errors, [action.field]: action.error }
      };
      
    case 'SUBMIT':
      return { ...state, isSubmitting: true };
      
    case 'SUBMIT_SUCCESS':
      return { ...initialState };
      
    case 'SUBMIT_ERROR':
      return { ...state, isSubmitting: false, submitError: action.error };
      
    default:
      return state;
  }
}

const initialState = {
  email: '',
  password: '',
  confirmPassword: '',
  errors: {},
  isSubmitting: false,
  submitError: null
};

function SignupForm() {
  const [state, dispatch] = useReducer(formReducer, initialState);
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: 'SUBMIT' });
    
    try {
      await signupAPI(state.email, state.password);
      dispatch({ type: 'SUBMIT_SUCCESS' });
    } catch (error) {
      dispatch({ type: 'SUBMIT_ERROR', error: error.message });
    }
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <input
        value={state.email}
        onChange={(e) => dispatch({
          type: 'SET_FIELD',
          field: 'email',
          value: e.target.value
        })}
      />
      {/* More fields... */}
    </form>
  );
}`}</CodeBlock>
        </section>

        <section className='space-y-4'>
          <h2 className='text-2xl font-semibold text-zinc-900 dark:text-white'>
            useReducer vs useState
          </h2>
          <div className='grid md:grid-cols-2 gap-4'>
            <div className='bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4'>
              <h3 className='font-semibold text-green-900 dark:text-green-300 mb-2'>
                Use useReducer when:
              </h3>
              <ul className='list-disc list-inside space-y-1 text-sm text-zinc-700 dark:text-zinc-300'>
                <li>State logic is complex</li>
                <li>Multiple sub-values in state</li>
                <li>Next state depends on previous</li>
                <li>Want to centralize state logic</li>
                <li>Need Redux-like patterns</li>
              </ul>
            </div>

            <div className='bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4'>
              <h3 className='font-semibold text-blue-900 dark:text-blue-300 mb-2'>
                Use useState when:
              </h3>
              <ul className='list-disc list-inside space-y-1 text-sm text-zinc-700 dark:text-zinc-300'>
                <li>State is simple</li>
                <li>Independent state values</li>
                <li>Simple toggles or counters</li>
                <li>No complex update logic</li>
                <li>Quick prototyping</li>
              </ul>
            </div>
          </div>
        </section>

        <section className='space-y-4'>
          <h2 className='text-2xl font-semibold text-zinc-900 dark:text-white'>
            Best Practices
          </h2>
          <div className='bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4'>
            <ul className='list-disc list-inside space-y-2 text-zinc-700 dark:text-zinc-300'>
              <li>Keep reducer functions pure (no side effects)</li>
              <li>Use TypeScript or constants for action types</li>
              <li>Include a default case that throws an error</li>
              <li>Return new objects, don't mutate existing state</li>
              <li>Use action payloads for passing data</li>
              <li>Consider combining with useContext for global state</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}
