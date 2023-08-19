import { FunctionComponent } from 'react';
import { Controller } from 'react-hook-form';
import { Control } from 'react-hook-form';

import { Inputs } from '../../types';
import { stickerList, wordStickerText } from '../../constants';

import '../../style/index.scss';

type DailyStickerProps = {
  control: Control<Inputs, any>;
};

const DailySticker: FunctionComponent<DailyStickerProps> = ({ control }) => {
  return (
    <div className="setting-sticker-container">
      <span className="setting-sticker-title">{wordStickerText}</span>
      <Controller
        name="mude"
        control={control}
        rules={{ required: true }}
        render={({ field }) => (
          <div className="setting-sticker-box" {...field}>
            {stickerList.map((sticker) => (
              <label
                htmlFor={sticker}
                key={sticker}
                className="setting-sticker-width"
              >
                <input
                  type="radio"
                  id={sticker}
                  name={field.name}
                  value={sticker}
                  checked={field.value === sticker}
                  onChange={(e) => {
                    field.onChange(e.target.value);
                  }}
                />
                <img
                  src={`/png/${sticker}.png`}
                  className="logo react"
                  alt="React logo"
                />
              </label>
            ))}
          </div>
        )}
      />
    </div>
  );
};

export default DailySticker;
