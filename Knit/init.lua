local RunService = game:GetService("RunService")

local exports = {}

if RunService:IsServer() then
	exports.KnitServer = require(script.KnitServer)
else
	local KnitServer = script:FindFirstChild("KnitServer")
	if KnitServer then
		KnitServer:Destroy()
	end
	exports.KnitClient = require(script.KnitClient)
end

return exports
