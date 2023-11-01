import React from "react";
import "../Style/Bloodmain.css";

function Bloodmain  ()  {
  return (
    <div className="a">
      <div className="div">
        <img className="line" alt="Line" src="line-4.svg" />
        <div className="frame">
          <div className="text-wrapper">혈액 검사 결과 리포트</div>
          <div className="text-wrapper-2">Blood Test Results Report</div>
        </div>
        <div className="frame-2">
          <div className="text-wrapper-3">Date/Time</div>
          <div className="frame-3">
            <div className="text-wrapper-3">2023-10-19</div>
            <div className="text-wrapper-3">오후 5:43</div>
          </div>
        </div>
        <div className="frame-4">
          <div className="text-wrapper-4">201212670</div>
          <div className="text-wrapper-4">뭉크</div>
        </div>
        <div className="overlap">
          <div className="frame-5">
            <div className="text-wrapper-5">혈액 검사란?</div>
            <div className="div-wrapper">
              <p className="p">
                혈액 검사는 반려동물의 건강 평가와 질병 진단에 요구되는 중요한 절차입니다.
                <br />
                혈액 검사는 반려동물의 혈액 안에 포함된 다양한 물질 농도와 수를 측정 하며, <br />이 정보를 활용하여
                수의사는 빈혈,염증,복강 장기의 기능 및 질병 상태를 평가 합니다.
                <br />
                혈액 검사에 필요한 혈액은 주로 반려 동물의 목 혈관 이나 앞다리 혈관에서 채취됩니다.&nbsp;&nbsp; <br />
                반려동물의 상태에 따라서 필요한 혈액 검사 항목은 달라질 수 있습니다.
              </p>
            </div>
          </div>
          <div className="text-wrapper-6">혈액 검사 항목</div>
        </div>
        <div className="frame-6">
          <div className="frame-7">
            <div className="group">
              <img className="img" alt="Blood cells" src="blood-cells.png" />
            </div>
            <div className="frame-8">
              <div className="text-wrapper-7">전 혈구 검사 (CBC)</div>
              <div className="frame-9">
                <div className="frame-10">
                  <div className="ellipse-wrapper">
                    <div className="ellipse" />
                  </div>
                  <p className="text-wrapper-8">혈액 내 다양한 세포들의 수를 측정하는 검사입니다.</p>
                </div>
                <div className="frame-10">
                  <div className="ellipse-wrapper">
                    <div className="ellipse" />
                  </div>
                  <p className="text-wrapper-8">
                    적혈구, 백혈구, 혈소판 등의 수와 구성을 파악하여 면역 및 염증, 감염,
                    <br />
                    빈혈 등의 문제를 판단할 수 있습니다.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="frame-7">
            <div className="group">
              <img className="img" alt="Blood test" src="blood-test.png" />
            </div>
            <div className="frame-8">
              <div className="text-wrapper-7">화학 검사 (Chemistry)</div>
              <div className="frame-11">
                <div className="frame-10">
                  <div className="ellipse-wrapper">
                    <div className="ellipse" />
                  </div>
                  <p className="text-wrapper-8">혈액 내의 화학 물질의 농도를 평가합니다.</p>
                </div>
                <div className="frame-10">
                  <div className="ellipse-wrapper">
                    <div className="ellipse" />
                  </div>
                  <p className="text-wrapper-8">
                    간, 신장 복강 장기의 기능 및 질병 상태 등을&nbsp;&nbsp;평가할 수 있습니다.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="frame-7">
            <div className="group">
              <div className="group-2">
                <div className="overlap-group-wrapper">
                  <div className="overlap-group">
                    <div className="rectangle" />
                    <div className="rectangle-2" />
                  </div>
                </div>
                <div className="rectangle-wrapper">
                  <div className="rectangle-3" />
                </div>
              </div>
            </div>
            <div className="frame-8">
              <div className="text-wrapper-7">전해질 검사 (Electrolyte)</div>
              <div className="frame-11">
                <div className="frame-10">
                  <div className="ellipse-wrapper">
                    <div className="ellipse" />
                  </div>
                  <p className="text-wrapper-8">혈액 내의 전해질 이온 농도를 측정 합니다.</p>
                </div>
                <div className="frame-10">
                  <div className="ellipse-wrapper">
                    <div className="ellipse" />
                  </div>
                  <p className="text-wrapper-8">
                    나트륨, 칼륨, 염소 등을 평가하여 신장, 심장, 근육, 신경 등의 기능과 <br />
                    관련된 전기 화학적인 균형을 확인합니다.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="frame-7">
            <div className="group">
              <div className="group-3">
                <div className="overlap-group-wrapper">
                  <div className="overlap-group">
                    <div className="rectangle" />
                    <div className="rectangle-2" />
                  </div>
                </div>
                <div className="rectangle-wrapper">
                  <div className="rectangle-3" />
                </div>
              </div>
            </div>
            <div className="frame-8">
              <div className="text-wrapper-7">SDMA 검사</div>
              <div className="frame-11">
                <div className="frame-10">
                  <div className="ellipse-wrapper">
                    <div className="ellipse" />
                  </div>
                  <p className="text-wrapper-8">신장에서 배설되는 단백질 대사 산물의 일종 입니다.</p>
                </div>
                <div className="frame-10">
                  <div className="ellipse-wrapper">
                    <div className="ellipse" />
                  </div>
                  <p className="text-wrapper-8">
                    신장 기능 저하에 매우 민감하게 반응하여 신장 관련 질병을 조기에 진단할 수 있는 지표 입니다.
                  </p>
                </div>
                <div className="frame-10">
                  <div className="ellipse-wrapper">
                    <div className="ellipse" />
                  </div>
                  <p className="text-wrapper-8">
                    특히 만성 신부전 진단에 유용하여 고령의 고양이, 강아지에게 추천됩니다.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="frame-7">
            <div className="group">
              <div className="group-4">
                <div className="overlap-group-wrapper">
                  <div className="overlap-group">
                    <div className="rectangle" />
                    <div className="rectangle-2" />
                  </div>
                </div>
                <div className="rectangle-wrapper">
                  <div className="rectangle-3" />
                </div>
              </div>
            </div>
            <div className="frame-8">
              <div className="text-wrapper-7">Total T4 검사</div>
              <div className="frame-11">
                <div className="frame-10">
                  <div className="ellipse-wrapper">
                    <div className="ellipse" />
                  </div>
                  <p className="text-wrapper-8">갑상선 호르몬 중 하나인 티로신 입니다.</p>
                </div>
                <div className="frame-10">
                  <div className="ellipse-wrapper">
                    <div className="ellipse" />
                  </div>
                  <p className="text-wrapper-8">
                    갑상선 기능 저하증, 갑상선 기능 항진증 여부를 일차적으로 판단하는 <br />
                    갑상선 기능 지표 입니다.
                  </p>
                </div>
                <div className="frame-10">
                  <div className="ellipse-wrapper">
                    <div className="ellipse" />
                  </div>
                  <p className="text-wrapper-8">검사 결과에 따라 추가 갑상선 관련 검사가 요구될 수 있습니다.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="frame-7">
            <div className="group">
              <div className="group-5">
                <div className="overlap-group-wrapper">
                  <div className="overlap-group">
                    <div className="rectangle" />
                    <div className="rectangle-2" />
                  </div>
                </div>
                <div className="rectangle-wrapper">
                  <div className="rectangle-3" />
                </div>
              </div>
            </div>
            <div className="frame-8">
              <div className="text-wrapper-7">pBNP 검사</div>
              <div className="frame-11">
                <div className="frame-10">
                  <div className="ellipse-wrapper">
                    <div className="ellipse" />
                  </div>
                  <p className="text-wrapper-8">심장의 심실 근육에서 분비되는 호르몬 입니다.</p>
                </div>
                <div className="frame-10">
                  <div className="ellipse-wrapper">
                    <div className="ellipse" />
                  </div>
                  <p className="text-wrapper-8">
                    심근에 과도한 스트레스가 가해졌을 때 높게 측정될 수 있으며,
                    <br />
                    이는 심장 관련 질병의 가능성을 나타낼 수 있습니다.
                  </p>
                </div>
                <div className="frame-10">
                  <div className="ellipse-wrapper">
                    <div className="ellipse" />
                  </div>
                  <p className="text-wrapper-8">검사 결과에 따라 심장 초음파 검사가 요구될 수 있습니다.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-wrapper-9">1</div>
        <div className="frame-12">
          <div className="rectangle-4" />
          <div className="text-wrapper-10">광진24시필동물병원</div>
        </div>
        <div className="text-wrapper-11">검사 요약 (TBD)</div>
        <div className="frame-13">
          <p className="text-wrapper-12">
            혈액 검사는 한 개의 검사 항목 만으로 반려동물의 건강 상태를 평가하지 않습니다. <br />
            일부 검사 결과가 &#39;주의&#39; 수준일지라도, 다른 검사 항목과 함께 고려해야만 실제 건강 상태를 판단할 수
            있습니다. <br />
            그러므로 &#39;주의&#39; 결과의 개수가 실제 반려동물의 건강상태를 대변 하지는 않습니다.
          </p>
        </div>
        <div className="frame-14">
          <div className="text-wrapper-13">전 혈구 검사 (CBC)</div>
          <div className="frame-wrapper">
            <div className="frame-15">
              <div className="frame-16">
                <div className="div-2">
                  <div className="vector-stroke-wrapper">
                    <img className="vector-stroke" alt="Vector stroke" src="vector-377-stroke.svg" />
                  </div>
                </div>
                <div className="text-wrapper-14">정상 18</div>
              </div>
              <div className="frame-16">
                <div className="div-2">
                  <div className="group-wrapper">
                    <div className="group-6">
                      <div className="rectangle-5" />
                      <div className="rectangle-6" />
                    </div>
                  </div>
                </div>
                <div className="text-wrapper-15">주의 1</div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-wrapper-16">화학 검사 (Chemistry)</div>
        <div className="frame-17">
          <div className="frame-15">
            <div className="frame-16">
              <div className="div-2">
                <div className="vector-stroke-wrapper">
                  <img className="vector-stroke" alt="Vector stroke" src="image.svg" />
                </div>
              </div>
              <div className="text-wrapper-14">정상 8</div>
            </div>
            <div className="frame-16">
              <div className="div-2">
                <div className="group-wrapper">
                  <div className="group-6">
                    <div className="rectangle-5" />
                    <div className="rectangle-6" />
                  </div>
                </div>
              </div>
              <div className="text-wrapper-15">주의 6</div>
            </div>
          </div>
        </div>
        <div className="frame-18">
          <div className="text-wrapper-13">T4 검사</div>
          <div className="frame-19">
            <div className="frame-20">
              <div className="div-2">
                <img className="subtract" alt="Subtract" src="subtract-2.svg" />
              </div>
              <div className="text-wrapper-17">해당없음</div>
            </div>
          </div>
        </div>
        <div className="frame-21">
          <div className="text-wrapper-13">전해질 검사 (Electrolyte)</div>
          <div className="frame-wrapper">
            <div className="frame-15">
              <div className="frame-16">
                <div className="div-2">
                  <div className="vector-stroke-wrapper">
                    <img className="vector-stroke" alt="Vector stroke" src="vector-377-stroke-2.svg" />
                  </div>
                </div>
                <div className="text-wrapper-14">정상 8</div>
              </div>
              <div className="frame-16">
                <div className="div-2">
                  <div className="group-wrapper">
                    <div className="group-6">
                      <div className="rectangle-5" />
                      <div className="rectangle-6" />
                    </div>
                  </div>
                </div>
                <div className="text-wrapper-15">주의 6</div>
              </div>
            </div>
          </div>
        </div>
        <div className="frame-22">
          <div className="text-wrapper-13">SDMA 검사</div>
          <div className="frame-19">
            <div className="frame-20">
              <div className="div-2">
                <img className="subtract" alt="Subtract" src="subtract.svg" />
              </div>
              <div className="text-wrapper-17">해당없음</div>
            </div>
          </div>
        </div>
        <div className="text-wrapper-18">T4 검사</div>
        <div className="frame-23">
          <div className="frame-20">
            <div className="div-2">
              <img className="subtract" alt="Subtract" src="subtract-3.svg" />
            </div>
            <div className="text-wrapper-17">해당없음</div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Bloodmain