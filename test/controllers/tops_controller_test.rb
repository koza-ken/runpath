require "test_helper"

class ClickcountsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get clickcounts_index_url
    assert_response :success
  end
end
