import { Controller } from 'react-hook-form';

import './style/index.scss';
import { colorset } from './constants';
import useSetting from './hooks/useSetting';

const Container = () => {
  const { register, handleSubmit, control, onSubmit } = useSetting();

  return (
    <div className="setting-container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <span>Today's comment: </span>
          <input defaultValue="퇴근하고싶다" {...register('comment')} />
        </div>

        <div>
          {/* <select {...register('mude')}>
          {colorset.map((color) => (
            <option key={color} value={color}>{color}</option>
          ))}
        </select> */}
          <Controller
            name="mude"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <fieldset {...field}>
                {colorset.map((color) => (
                  <label htmlFor={color} key={color}>
                    <input
                      type="radio"
                      id={color}
                      name={field.name}
                      value={color}
                      checked={field.value === color}
                      onChange={(e) => {
                        field.onChange(e.target.value);
                      }}
                    />
                    {color}
                  </label>
                ))}
              </fieldset>
            )}
          />
        </div>

        <input type="submit" />
      </form>
    </div>
  );
};

export default Container;
