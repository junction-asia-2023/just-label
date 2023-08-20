import { FunctionComponent } from 'react';
import { Controller } from 'react-hook-form';
import { Control } from 'react-hook-form';
import { useAtom } from 'jotai';

import { Inputs } from '../../types';
import { stickerList, stickerText, wordStickerText } from '../../constants';

import moodBad from '/png/mood_BAD.png';
import moodGood from '/png/mood_GOOD.png';

import '../../style/index.scss';

import { previewMoodAtom } from '../../../shared/layout/atom';

type DailyStickerProps = {
  control: Control<Inputs, any>;
};

const DailySticker: FunctionComponent<DailyStickerProps> = ({ control }) => {
  const [, setPreviewMood] = useAtom(previewMoodAtom);
  return (
    <div className="setting-sticker-container">
      <span className="setting-sticker-title">{wordStickerText}</span>
      <Controller
        name="mood"
        control={control}
        rules={{ required: true }}
        render={({ field }) => (
          <div className="setting-sticker-box" {...field}>
            {stickerList.map((sticker, idx) => (
              <label
                htmlFor={sticker}
                key={sticker}
                className="setting-sticker-width"
              >
                {field.value === sticker && (
                  <div className="setting-sticker-picked">
                    <span className="setting-sticker-text">
                      {stickerText[idx]}
                    </span>
                  </div>
                )}
                <input
                  type="radio"
                  id={sticker}
                  name={field.name}
                  value={sticker}
                  checked={field.value === sticker}
                  onChange={(e) => {
                    field.onChange(e.target.value);
                    setPreviewMood((prev) => ({
                      ...prev,
                      value: stickerText[idx],
                    }));
                  }}
                />
                <img
                  src={sticker === 'mood_BAD' ? moodBad : moodGood}
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
