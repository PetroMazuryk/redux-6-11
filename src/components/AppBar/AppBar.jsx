import { Button } from 'components/Button/Button';
import { StatusFilter } from 'components/StatusFilter/StatusFilter';
import { TaskCounter } from 'components/TaskCounter/TaskCounter';
import css from './AppBar.module.css';

import { useDispatch } from 'react-redux';
import { DeleteAllCompleted } from 'redux/actions';

export const AppBar = () => {
  const dispatch = useDispatch();
  return (
    <header className={css.wrapper}>
      <section className={css.section}>
        <h2 className={css.title}>Tasks</h2>
        <TaskCounter />
      </section>
      <section className={css.section}>
        <h2 className={css.title}>Some title</h2>
        <Button onClick={() => dispatch(DeleteAllCompleted())}>
          Delete completed
        </Button>
      </section>
      <section className={css.section}>
        <h2 className={css.title}>Filter by status</h2>
        <StatusFilter />
      </section>
    </header>
  );
};
