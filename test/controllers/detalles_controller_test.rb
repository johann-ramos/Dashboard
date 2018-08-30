require 'test_helper'

class DetallesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @detalle = detalles(:one)
  end

  test "should get index" do
    get detalles_url, as: :json
    assert_response :success
  end

  test "should create detalle" do
    assert_difference('Detalle.count') do
      post detalles_url, params: { detalle: { buildNumber: @detalle.buildNumber, ejecutor: @detalle.ejecutor, fecha: @detalle.fecha, jobName: @detalle.jobName, output: @detalle.output, pos: @detalle.pos, status: @detalle.status, tiendas: @detalle.tiendas } }, as: :json
    end

    assert_response 201
  end

  test "should show detalle" do
    get detalle_url(@detalle), as: :json
    assert_response :success
  end

  test "should update detalle" do
    patch detalle_url(@detalle), params: { detalle: { buildNumber: @detalle.buildNumber, ejecutor: @detalle.ejecutor, fecha: @detalle.fecha, jobName: @detalle.jobName, output: @detalle.output, pos: @detalle.pos, status: @detalle.status, tiendas: @detalle.tiendas } }, as: :json
    assert_response 200
  end

  test "should destroy detalle" do
    assert_difference('Detalle.count', -1) do
      delete detalle_url(@detalle), as: :json
    end

    assert_response 204
  end
end
