import { Controller } from 'react-hook-form';
import { useAtom } from 'jotai';
import { useLayoutEffect } from 'react';

import { titleAtom } from '../shared/layout/atom';

import { colorset } from './constants';
import useSetting from './hooks/useSetting';
import './style/index.scss';
import PreviewSection from './components/PreviewSection';

const Container = () => {
  const [, setTitle] = useAtom(titleAtom);
  const { register, handleSubmit, control, onSubmit } = useSetting();

  useLayoutEffect(() => {
    setTitle({ title: 'Active', back: true });
  }, []);

  return (
    <div className="setting-container">
      <PreviewSection />
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <span>Today's comment: </span>
          <input defaultValue="퇴근하고싶다" {...register('comment')} />
        </div>

        <div>
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
