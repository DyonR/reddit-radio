var moment = require("moment");

class ToolsModule
{
	onCmdJoinTime(msg) { this.onCmdJoinDate(msg); }
	onCmdJoinDate(msg)
	{
		var joinedAt = moment(msg.member.joinedAt);
		msg.reply("You joined this server **" + joinedAt.fromNow() + "**. (" + joinedAt.format() + ")");
	}
}

module.exports = ToolsModule;