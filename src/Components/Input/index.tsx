import React, { useEffect, useState } from "react";
import Select from "./Select";
import TextInput from "./Input";
import { renderInputs } from "../../constants";

interface AppProps {
  setFormObject: Function;
}

function Index({ setFormObject }: AppProps) {
  const [formData, setFormData] = useState({});
  useEffect(() => {
    setFormObject(formData);
  }, [formData]);
  return (
    <>
      {renderInputs.map((_input) => (
        <div
          className={
            _input.type === "SELECT"
              ? "flex divide-x divide-input-color rounded-2xl w-full bg-input-container-color relative mb-4"
              : "flex rounded-2xl w-full bg-input-container-color relative mb-4"
          }
        >
          <div className="w-full h-28  p-3 ">
            <div className="text-slate-600 font-bold text-sm">
              {_input.paramOne.upperText}
            </div>
            {_input.type === "SELECT" ? (
              <Select
                setOption={(val: string) =>
                  setFormData({ ...formData, [_input.paramOne.upperText]: val })
                }
                text={_input.paramOne.name}
              />
            ) : (
              <TextInput
                setText={(val: string) =>
                  setFormData({
                    ...formData,
                    [_input.paramOne.upperText]: val,
                  })
                }
                text={_input.paramOne.name}
              />
            )}
          </div>

          {_input.paramTwo && (
            <div className="w-full h-28 relative  p-3 ">
              {_input.type === "SELECT" && (
                <img
                  className="h-12  w-12 my-0 absolute right-72 top-8"
                  style={{ right: 291 }}
                  src="https://relative.fi/images/03-RLTV-TOKEN.svg"
                />
              )}
              <div className="mx-8 text-slate-600 font-bold text-sm">
                {_input.paramTwo?.upperText}
              </div>
              <div className="mx-8">
                {_input.type === "SELECT" ? (
                  <Select
                    setOption={(val: string) =>
                      setFormData({
                        ...formData,
                        [_input.paramTwo.upperText]: val,
                      })
                    }
                    text={_input.paramTwo.name}
                  />
                ) : (
                  <TextInput
                    setText={(val: string) =>
                      setFormData({
                        ...formData,
                        [_input.paramTwo.upperText]: val,
                      })
                    }
                    text={_input.paramTwo.name}
                  />
                )}
              </div>
            </div>
          )}
        </div>
      ))}
    </>
  );
}

export default Index;
