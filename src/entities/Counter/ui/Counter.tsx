import {Button} from "shared/ui/Button/Button";
import {useDispatch, useSelector} from "react-redux";
import {counterActions} from "../model/slice/counterSlice";
import {useTranslation} from "react-i18next";
import {getCounterValue} from "../model/selectors/getCounterValue/getCounterValue";

export const Counter = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const contentValue = useSelector(getCounterValue)
  const onIncrement = () => {
    dispatch(counterActions.increment());
  }
  const onDecrement = () => {
    dispatch(counterActions.decrement());
  }
  return (
    <div>
      <h1 data-testid="value-title">{contentValue}</h1>
      <Button
        onClick={onIncrement}
        data-testid="increment-btn"
      >
        {t('increment')}
      </Button>
      <Button
        onClick={onDecrement}
        data-testid="decrement-btn"
      >
        {t('decrement')}
      </Button>
    </div>
  )
}