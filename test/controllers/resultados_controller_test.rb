require 'test_helper'

class ResultadosControllerTest < ActionDispatch::IntegrationTest
  setup do
    @resultado = resultados(:one)
  end

  test "should get index" do
    get resultados_url, as: :json
    assert_response :success
  end

  test "should create resultado" do
    assert_difference('Resultado.count') do
      post resultados_url, params: { resultado: { buildNumber: @resultado.buildNumber, ejecutor: @resultado.ejecutor, fecha: @resultado.fecha, hora: @resultado.hora, jobName: @resultado.jobName, output: @resultado.output } }, as: :json
    end

    assert_response 201
  end

  test "should show resultado" do
    get resultado_url(@resultado), as: :json
    assert_response :success
  end

  test "should update resultado" do
    patch resultado_url(@resultado), params: { resultado: { buildNumber: @resultado.buildNumber, ejecutor: @resultado.ejecutor, fecha: @resultado.fecha, hora: @resultado.hora, jobName: @resultado.jobName, output: @resultado.output } }, as: :json
    assert_response 200
  end

  test "should destroy resultado" do
    assert_difference('Resultado.count', -1) do
      delete resultado_url(@resultado), as: :json
    end

    assert_response 204
  end
end
